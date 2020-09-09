/** @jsx jsx */
import { jsx } from '@chakra-ui/core';
import useSWR from 'swr';

import { MainLayout } from '../../components/layouts/MainLayout';
import useUser from '../../libs/useUser';
import { IUser } from '../../interfaces/IUser';
import { fetcher } from '../../libs/fetcher';
import { UserCard } from '../../components/user/UserCard';

export default function Users() {
  const { user } = useUser({
    redirectTo: '/login',
  });

  const { data, mutate } = useSWR<Array<IUser>, any>(user?.roleId === 1 ? '/account' : null);

  return (
    <MainLayout>
      {data?.map((user) => (
        <UserCard
          key={user.userId}
          user={user}
          onDeleteUser={async () => {
            await fetcher(`/account/${user.userId}`, {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
            });
            await mutate();
          }}
        />
      ))}
    </MainLayout>
  );
}
