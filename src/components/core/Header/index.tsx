/** @jsx jsx */
import { jsx, useColorMode } from '@chakra-ui/core';
import { mode } from '@chakra-ui/theme-tools';
import { FC } from 'react';

interface IHeaderProps {}

export const Header: FC<IHeaderProps> = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <nav
      sx={{
        px: 4,
        py: 3,
        zIndex: 1040,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bg: mode('white', 'gray.800')({ colorMode }),
        borderBottom: '1px',
        borderBottomColor: mode('gray.300', 'gray.700')({ colorMode }),
        height: '78px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      {children}
    </nav>
  );
};
