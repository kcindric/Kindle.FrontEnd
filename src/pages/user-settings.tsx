import { MainLayout } from '../components/layouts/MainLayout';
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/core';

import useUser from '../libs/useUser';
import { Gravatar } from '../components/Gravatar';
import { Card } from '../components/core/Card';

export default function UserSettings() {
  const { user } = useUser();

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
