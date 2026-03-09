type TokenPayload = {
  email: string;
  role: string;
};

export function signAppToken(payload: TokenPayload): string {
  // Placeholder token signer; swap with JWT signing in production.
  return Buffer.from(JSON.stringify(payload)).toString("base64url");
}
