/** @jsx jsx */
import { jsx } from '@chakra-ui/core';
import { FC } from 'react';

interface IAuthLayoutProps {}

export const AuthLayout: FC<IAuthLayoutProps> = ({ children }) => {
  return (
    <div
      sx={{
        display: 'flex',
        width: '100%',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        bg: 'gray.50',
        p: 4,
      }}
    >
      {children}
    </div>
  );
};
