/** @jsx jsx */
import { jsx, Editable, EditablePreview, EditableInput, SkeletonCircle, Skeleton, Text, Button } from '@chakra-ui/core';
import { FC } from 'react';
import { Gravatar } from '../../Gravatar';
import { IUser } from '../../../interfaces/IUser';
import { PasswordInput } from '../../forms/PasswordField';

interface IUserEditInfoProps {
  user?: IUser;
}

export const UserEditInfo: FC<IUserEditInfoProps> = ({ user }) => {
  if (!user) {
    return (
      <>
        <SkeletonCircle size="200px" sx={{ display: 'block', m: '0 auto', mb: 5, mt: -100 }} />
        <Skeleton height="20px" mb={2} />
        <Skeleton height="20px" />
      </>
    );
  }

  return (
    <>
      <Gravatar email={user?.email} sx={{ display: 'block', width: 200, height: 200, m: '0 auto', mb: 5, mt: -100 }} />
      <Editable defaultValue={user?.email} mb={4}>
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Text mb={2} fontWeight="bold" textTransform="uppercase">
        Change Password:
      </Text>
      <form>
        <PasswordInput placeholder="Enter old password" mb={2} />
        <PasswordInput placeholder="Enter new password" mb={4} />
        <Button type="submit" colorScheme="yellow" width="100%">
          Update password
        </Button>
      </form>
    </>
  );
};
