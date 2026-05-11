export interface RegisterBody {
  name: string;
  email: string;
  password: string;
  role?: "admin" | "seller" | "buyer";
}


export function isRegisterBody(body: any): body is RegisterBody {
  if (body === null || typeof body !== "object") return false;
  if (typeof body.name !== "string") return false;
  if (typeof body.email !== "string") return false;
  if (typeof body.password !== "string") return false;
  if (body.role !== undefined && typeof body.role !== "string") return false;

  return true;
}
