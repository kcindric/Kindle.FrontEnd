/** @jsx jsx */
import { jsx, SxStyleProp } from '@chakra-ui/core';
import { FC } from 'react';

interface ISiderProps {
  collapsed: boolean;
  sx?: SxStyleProp;
}

export const Sider: FC<ISiderProps> = ({ children, collapsed, sx }) => {
  return (
    <aside
      sx={{
        py: 3,
        boxShadow: 'lg',
        width: collapsed ? '56px' : '256px',
        ...sx,
      }}
    >
      {children}
    </aside>
  );
};
