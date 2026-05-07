"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function signUpAction(data: {
  email: string;
  password: string;
  name: string;
}) {
  return await auth.api.signUpEmail({
    body: {
      email: data.email,
      password: data.password,
      name: data.name,
    },
    headers: await headers(),
  });
}

export async function signInAction(data: {
  email: string;
  password: string;
}) {
  return await auth.api.signInEmail({
    body: {
      email: data.email,
      password: data.password,
    },
    headers: await headers(),
  });
}