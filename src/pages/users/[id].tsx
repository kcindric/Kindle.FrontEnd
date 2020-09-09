import { useRouter } from 'next/router';
import useSWR from 'swr';

import { MainLayout } from '../../components/layouts/MainLayout';
import useUser from '../../libs/useUser';
import { Card } from '../../components/core/Card';
import { IUser } from '../../interfaces/IUser';
import { UserEditInfo } from '../../components/user/UserEditInfo';

export default function User() {
  useUser({
    redirectTo: '/login',
  });

  const { query } = useRouter();

  const { data: user } = useSWR<IUser, any>(query?.id ? `/account/${query?.id}` : null);

  return (
    <MainLayout>
      <Card maxW="lg" m="0 auto" p={4}>
        {user && <UserEditInfo user={user} />}
      </Card>
    </MainLayout>
  );
}
