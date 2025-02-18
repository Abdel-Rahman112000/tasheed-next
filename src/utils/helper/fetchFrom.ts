"use server";
import { cookies } from "next/headers";

export async function fetchFrom<T = any>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<T | null> {
  try {
    const cookieStore = await cookies();
    const lang = cookieStore.get("i18next")?.value;
    const res = await fetch(input, {
      next: { revalidate: 3600 },
      ...init,
      headers: { lang: `${lang}` },
    });
    console.log("res1111", res);
    if (res.ok) {
      return (await res.json()) as T;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}
