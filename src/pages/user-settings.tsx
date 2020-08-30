import { MainLayout } from '../components/layouts/MainLayout';
import { Box, Editable, EditableInput, EditablePreview } from '@chakra-ui/core';

import useUser from '../libs/useUser';
import { Gravatar } from '../components/Gravatar';

export default function UserSettings() {
  const { user } = useUser();

  return (
    <MainLayout>
      <Box p={3} bg="white">
        <Gravatar email={user?.email} />
        <Editable defaultValue={user?.email}>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Box>
    </MainLayout>
  );
}
