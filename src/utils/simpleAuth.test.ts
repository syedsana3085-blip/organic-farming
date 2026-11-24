import test from 'node:test';
import assert from 'node:assert/strict';
import {
  generateVerificationChallenge,
  normalizeUsername,
  validateUsername,
  verifyNumberAnswer,
} from './simpleAuth';

test('validateUsername enforces non-empty username with exact required message', () => {
  assert.equal(validateUsername(''), 'Please enter your username.');
  assert.equal(validateUsername('   '), 'Please enter your username.');
  assert.equal(validateUsername('Sana'), null);
  assert.equal(validateUsername('  K. Ramesh  '), null);
  assert.ok(validateUsername('a'.repeat(61)) !== null);
});

test('normalizeUsername trims and collapses extra whitespace', () => {
  assert.equal(normalizeUsername('  Ramesh   Kumar  '), 'Ramesh Kumar');
});

test('generateVerificationChallenge creates valid single-digit addition prompt', () => {
  const challenge = generateVerificationChallenge();
  assert.ok(challenge.left >= 1 && challenge.left <= 5);
  assert.ok(challenge.right >= 1 && challenge.right <= 5);
  assert.equal(challenge.answer, challenge.left + challenge.right);
  assert.equal(challenge.prompt, `${challenge.left} + ${challenge.right}`);
});

test('verifyNumberAnswer validates numeric verification accurately', () => {
  const challenge = { left: 3, right: 4, answer: 7, prompt: '3 + 4' };
  assert.equal(verifyNumberAnswer(challenge, '7'), null);
  assert.equal(verifyNumberAnswer(challenge, ' 7 '), null);
  assert.equal(verifyNumberAnswer(challenge, ''), 'Please enter the verification number.');
  assert.equal(verifyNumberAnswer(challenge, 'abc'), 'Please enter a valid number.');
  assert.equal(
    verifyNumberAnswer(challenge, '8'),
    'Incorrect verification number. Please try again.'
  );
});
