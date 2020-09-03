/** @jsx jsx */
import { jsx, useColorMode } from '@chakra-ui/core';
import { FC } from 'react';
import { mode } from '@chakra-ui/theme-tools';

interface IAuthLayoutProps {}

export const AuthLayout: FC<IAuthLayoutProps> = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <div
      sx={{
        display: 'flex',
        width: '100%',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        bg: mode('white', 'gray.800')({ colorMode }),
        p: 4,
      }}
    >
      {children}
    </div>
  );
};
