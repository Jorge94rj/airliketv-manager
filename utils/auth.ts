import { signIn } from 'next-auth/react';

interface ICredentials {
  username: string;
  password: string;
}

export function signInWithCredentials({username, password}: ICredentials) {
  return signIn('credentials', {
    redirect: false,
    username: username,
    password: password,
  });
}