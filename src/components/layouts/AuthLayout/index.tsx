/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC } from 'react';

interface IAuthLayoutProps {}

export const AuthLayout: FC<IAuthLayoutProps> = ({ children }) => {
  return (
    <div
      sx={{
        display: 'flex',
        width: '100%',
        minHeight: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        bg: 'muted',
        p: 4,
      }}
    >
      {children}
    </div>
  );
};
