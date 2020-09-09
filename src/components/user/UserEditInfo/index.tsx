/** @jsx jsx */
import { jsx, Editable, EditablePreview, EditableInput } from '@chakra-ui/core';
import { FC } from 'react';
import { Gravatar } from '../../Gravatar';
import { IUser } from '../../../interfaces/IUser';

interface IUserEditInfoProps {
  user: IUser;
}

export const UserEditInfo: FC<IUserEditInfoProps> = ({ user }) => {
  return (
    <>
      <Gravatar email={user?.email} sx={{ display: 'block', width: 200, height: 200, m: '0 auto', mb: 5 }} />
      <Editable defaultValue={user?.email}>
        <EditablePreview />
        <EditableInput />
      </Editable>
    </>
  );
};
