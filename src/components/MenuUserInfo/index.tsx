/** @jsx jsx */
import { jsx, Box, useColorMode, Text } from '@chakra-ui/core';
import { mode } from '@chakra-ui/theme-tools';
import { FC } from 'react';

import { Gravatar } from '../Gravatar';
import { IUser } from '../../interfaces/IUser';

interface IMenuUserInfoProps {
  user: IUser;
}

export const MenuUserInfo: FC<IMenuUserInfoProps> = ({ user, ...rest }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 2,
        mb: 2,
        borderBottom: '1px',
        borderBottomColor: mode('gray.200', 'gray.700')({ colorMode }),
      }}
      {...rest}
    >
      <Gravatar email={user.email} />
      <Text ml={2} fontWeight="bold">
        {user.username}
        <Text fontSize="xs" fontWeight="normal">
          {user.email}
        </Text>
      </Text>
    </Box>
  );
};
