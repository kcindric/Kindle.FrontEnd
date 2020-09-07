/** @jsx jsx */
import { jsx, SystemStyleObject } from '@chakra-ui/core';
import { FC } from 'react';

interface ISiderProps {
  collapsed: boolean;
  sx?: SystemStyleObject;
}

export const Sider: FC<ISiderProps> = ({ children, collapsed, ...restProps }) => {
  return (
    <aside
      sx={{
        pt: '58px',
        width: collapsed ? '56px' : '256px',
        height: '100vh',
        position: 'fixed',
        zIndex: 1,
      }}
      {...restProps}
    >
      {children}
    </aside>
  );
};
