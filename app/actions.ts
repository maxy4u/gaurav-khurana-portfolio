'use server';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

export async function createCookie(name: string, value: string) {
  const cookieStore = cookies();

  const currentTheme = cookieStore.has('theme') ? cookieStore.get('theme')?.value : 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  await cookieStore.set({
    name,
    path: '/',
    value: value || newTheme
  });
}

export async function removeCookie(name: string) {
  await cookies().delete(name);
}

export async function getCookie(name: string): Promise<RequestCookie | null | undefined> {
  const cookieStore = cookies();
  const hasCookie = cookieStore.has(name);
  return Promise.resolve(hasCookie ? cookieStore.get('theme') : null);
}
