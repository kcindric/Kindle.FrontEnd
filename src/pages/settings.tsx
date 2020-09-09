import { MainLayout } from '../components/layouts/MainLayout';

import useUser from '../libs/useUser';
import { Card } from '../components/core/Card';
import { UserEditInfo } from '../components/user/UserEditInfo';

export default function UserSettings() {
  const { user } = useUser();

  console.log(user);

  return (
    <MainLayout>
      <Card maxW="lg" m="0 auto" sx={{ p: 5 }}>
        {user && <UserEditInfo user={user} />}
      </Card>
    </MainLayout>
  );
}
