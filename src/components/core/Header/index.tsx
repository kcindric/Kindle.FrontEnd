/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC } from 'react';

interface IHeaderProps {}

export const Header: FC<IHeaderProps> = ({ children }) => {
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
        bg: 'background',
        boxShadow: 'lg',
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
