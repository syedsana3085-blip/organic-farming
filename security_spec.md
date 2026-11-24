# Firestore Security Specification

## 1. Data Invariants
1. **Unauthenticated Denial**: No unauthenticated request (`request.auth == null`) may read or write any document in Firestore.
2. **PII Isolation**: `/users/{userId}` holds user email and account metadata and is readable/writable strictly by the owning `request.auth.uid == userId` or a verified admin (`request.auth.token.email == 'syedzakeeramrin@gmail.com' && request.auth.token.email_verified == true`).
3. **No Self-Escalated Roles**: On `/users/{userId}` creation, `role` MUST equal `'member'`. On update, `role` and `createdAt` and `uid` are immutable (`incoming().role == existing().role`).
4. **Master Gate & Ownership**: Subcollections (`surveyEntries`, `activityWeeks`, `portalSettings`) require `exists(/databases/$(database)/documents/users/$(userId))`, `isOwner(userId)`, and `incoming().ownerId == request.auth.uid` on writes.
5. **No Plaintext Passwords**: Password fields are strictly forbidden in Firestore documents via strict `keys().hasOnly(...)` allowlists.
6. **Temporal & Length Bounds**: All timestamps must equal `request.time`; all IDs match `^[a-zA-Z0-9_\-]+$` with `.size() <= 128`; all strings enforce bounded `.size()`.

## 2. Adversarial Payloads ("Dirty Dozen")
1. **Unauthenticated read on `/users/uid1`**: Expected `PERMISSION_DENIED`.
2. **Cross-user read on `/users/uid2` as `uid1`**: Expected `PERMISSION_DENIED`.
3. **Self-assigned admin role on `/users/uid1` create (`role: "admin"`)**: Expected `PERMISSION_DENIED`.
4. **Role escalation on `/users/uid1` update (`role: "admin"`)**: Expected `PERMISSION_DENIED`.
5. **Shadow/Ghost field (`password: "plaintext"` or `isVerified: true`) on `/users/uid1`**: Expected `PERMISSION_DENIED`.
6. **Admin email spoof (`email: "syedzakeeramrin@gmail.com"`, `email_verified: false`)**: Expected `PERMISSION_DENIED`.
7. **Spoofed `createdAt` timestamp (not `request.time`)**: Expected `PERMISSION_DENIED`.
8. **Mutating `uid` or `createdAt` during `/users/uid1` update**: Expected `PERMISSION_DENIED`.
9. **Oversized document ID (`> 128` chars or invalid chars) on `/users/{uid}/surveyEntries/{badId}`**: Expected `PERMISSION_DENIED`.
10. **Cross-user write on `/users/uid2/surveyEntries/e1` with `ownerId: "uid1"`**: Expected `PERMISSION_DENIED`.
11. **Oversized `description` (`> 2000` chars) on `activityWeeks`**: Expected `PERMISSION_DENIED`.
12. **Blanket list query on `/users` collection by non-admin**: Expected `PERMISSION_DENIED`.
