export interface VerificationChallenge {
  left: number;
  right: number;
  answer: number;
  prompt: string;
}

export function normalizeUsername(username: string): string {
  return username.trim().replace(/\s+/g, ' ');
}

export function validateUsername(username: string): string | null {
  const normalized = normalizeUsername(username);
  if (!normalized) {
    return 'Please enter your username.';
  }
  if (normalized.length > 60) {
    return 'Username must be 60 characters or fewer.';
  }
  return null;
}

export function generateVerificationChallenge(): VerificationChallenge {
  const left = Math.floor(Math.random() * 5) + 1; // 1..5
  const right = Math.floor(Math.random() * 5) + 1; // 1..5
  return {
    left,
    right,
    answer: left + right,
    prompt: `${left} + ${right}`,
  };
}

export function verifyNumberAnswer(
  challenge: VerificationChallenge,
  rawInput: string
): string | null {
  const trimmed = rawInput.trim();
  if (!trimmed) {
    return 'Please enter the verification number.';
  }
  if (!/^-?\d+$/.test(trimmed)) {
    return 'Please enter a valid number.';
  }
  const numericValue = Number(trimmed);
  if (numericValue !== challenge.answer) {
    return 'Incorrect verification number. Please try again.';
  }
  return null;
}
