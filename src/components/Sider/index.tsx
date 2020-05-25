/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { FC } from 'react';

interface ISiderProps {
  collapsed: boolean;
  sx?: SxStyleProp;
}

export const Sider: FC<ISiderProps> = ({ children, collapsed, sx }) => {
  return (
    <aside
      sx={{
        px: 2,
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
