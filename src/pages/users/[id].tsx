import { Editable, EditableInput, EditablePreview } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import { MainLayout } from '../../components/layouts/MainLayout';
import useUser from '../../libs/useUser';
import { Gravatar } from '../../components/Gravatar';
import { Card } from '../../components/core/Card';
import { IUser } from '../../interfaces/IUser';

export default function User() {
  useUser({
    redirectTo: '/login',
  });

  const { query } = useRouter();

  const { data: user } = useSWR<IUser, any>(query?.id ? `/account/${query?.id}` : null);

  return (
    <MainLayout>
      <Card>
        <Gravatar email={user?.email} />
        <Editable defaultValue={user?.email}>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Card>
    </MainLayout>
  );
}
