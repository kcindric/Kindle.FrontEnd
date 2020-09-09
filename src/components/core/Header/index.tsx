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
        p: 2,
        zIndex: 1040,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        borderBottom: '1px',
        borderBottomColor: mode('gray.200', 'gray.700')({ colorMode }),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backdropFilter: 'saturate(180%) blur(5px)',
        bg: mode('hsla(0,0%,100%,.8)', 'hsla(220,26%,14%,.8)')({ colorMode }),
      }}
    >
      {children}
    </nav>
  );
};
