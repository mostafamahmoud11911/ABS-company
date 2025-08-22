"use server";
import { AxiosError } from "axios";
import apiCall from "./services/apiCall";
import { cookies } from "next/headers";
import { decodeJwt, JWTPayload, jwtVerify, SignJWT } from "jose";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

const secretKey = process.env.NEXT_PUBLIC_SECRET;
const key = new TextEncoder().encode(secretKey);

const JWT_EXPIRATION_TIME = "30 days from now";

export async function encrypt(payload: JWTPayload | undefined) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(JWT_EXPIRATION_TIME)
    .sign(key);
}

export async function decrypt(input: string) {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });

  return payload;
}

export const signIn = async (user: { email: string; password: string }) => {
  try {
    const { data } = await apiCall.post("/auth/signin", user);

    const decoded = decodeJwt(data?.token as string);
    if (decoded.role !== "admin")
      return { status: false, error: "You are not admin" };
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
    // const session = await encrypt({ token: data.token, expires });

    (await cookies()).set("session", data.token, {
      expires,
    });
    return {
      status: true,
      data,
    };
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return {
      status: false,
      error: err.response?.data.message,
    };
  }
};

export async function logout() {
  (await cookies()).set("session", "", { expires: new Date(0) });
  redirect("/auth/login");
}

export async function fetchLogout() {
  return await logout();
}

export async function getSession(req?: NextRequest) {
  const session =
    (await cookies()).get("session") || req?.cookies.get("session");
  if (!session) return null;
  const encoded = await decrypt(session.value);

  return encoded;
}

export async function fetchSession() {
  return (await getSession()) as { name: string; role: string; email: string };
}

export async function getSessionToken(): Promise<string | null> {
  const session = (await cookies()).get("session");
  if (!session) return null;
  return session.value;
}

export async function updateSession(req: NextRequest) {
  const session = req.cookies.get("session");
  if (!session) return;

  const parsed = await decrypt(session.value);
  const res = NextResponse.next();
  res.cookies.set("session", await encrypt(parsed), {
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
  });

  return res;
}

