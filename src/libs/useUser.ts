import { useEffect } from 'react';
import Router from 'next/router';
import useSWR from 'swr';

interface IOptions {
  redirectTo?: string;
  redirectIfFound?: boolean;
}

export default function useUser({ redirectTo, redirectIfFound }: IOptions = {}) {
  const { data: user, mutate: mutateUser, error } = useSWR('/account/user');

  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo) return;

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && error) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user && !error)
    ) {
      Router.push(redirectTo);
    }
  }, [user, redirectIfFound, redirectTo, error]);

  return { user, mutateUser };
}
