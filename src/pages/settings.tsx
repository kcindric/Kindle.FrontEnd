import { MainLayout } from '../components/layouts/MainLayout';

import useUser from '../libs/useUser';
import { Card } from '../components/core/Card';
import { UserEditInfo } from '../components/user/UserEditInfo';

export default function UserSettings() {
  const { user } = useUser();

  return (
    <MainLayout>
      <Card maxW="lg" m="0 auto" mt={100} sx={{ p: 5 }}>
        <UserEditInfo user={user} />
      </Card>
    </MainLayout>
  );
}
