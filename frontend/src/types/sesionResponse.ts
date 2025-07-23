export interface SessionResponse {
  ok: boolean;
  user: {
    email: string;
    userId: string;
    iat: number;
  };
}
