type TokenPayload = {
  email: string;
  role: string;
};

export function signAppToken(payload: TokenPayload): string {
  // Placeholder token signer; swap with JWT signing in production.
  return Buffer.from(JSON.stringify(payload)).toString("base64url");
}

export function parseAppToken(token: string): TokenPayload | null {
  try {
    const json = Buffer.from(token, "base64url").toString("utf-8");
    const payload = JSON.parse(json) as TokenPayload;

    if (!payload.email || !payload.role) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}
