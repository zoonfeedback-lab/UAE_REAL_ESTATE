export interface LoginBody {
  email: string;
  password: string;
}

export function isLoginBody(body: any): body is LoginBody {
  if (body === null || typeof body !== "object") return false;
  if (typeof body.email !== "string") return false;
  if (typeof body.password !== "string") return false;

  return true;
}
