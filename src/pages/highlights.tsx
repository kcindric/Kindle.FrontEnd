import { MainLayout } from '../components/layouts/MainLayout';
import { Card } from 'theme-ui';

import useUser from '../libs/useUser';

export default function Highlights() {
  const { user } = useUser({
    redirectTo: `${process.env.linkPrefix}/`,
  });

  return (
    <MainLayout isLoading={!user}>
      <Card>highlights</Card>
    </MainLayout>
  );
}
