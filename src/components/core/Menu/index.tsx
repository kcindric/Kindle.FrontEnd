/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { FC, ReactNode, forwardRef } from 'react';
import { useRouter } from 'next/dist/client/router';

interface IMenuProps {}

export const Menu: FC<IMenuProps> = ({ children }) => {
  return <div sx={{ display: 'flex', flexDirection: 'column' }}>{children}</div>;
};

interface IMenuItemProps {
  icon: ReactNode;
  sx?: SxStyleProp;
  href?: string;
}

export const MenuItem: FC<IMenuItemProps> = forwardRef<HTMLAnchorElement, IMenuItemProps>(function MenuItem(
  { children, icon, sx, href, ...rest },
  ref,
) {
  const router = useRouter();

  return (
    <a
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        px: 3,
        py: 2,
        textDecoration: 'none',
        color: 'text',
        fontWeight: 'semibold',
        fontSize: 0,
        borderBottom: '1px solid',
        borderBottomColor: 'muted',
        '&:hover': {
          color: 'primaryHover',
          svg: {
            color: 'primaryHover',
          },
        },
        '&[aria-current="page"]': {
          color: 'primary',
          svg: {
            color: 'primary',
          },
        },
        cursor: 'pointer',
        ...sx,
      }}
      aria-current={router.asPath === href ? 'page' : undefined}
      {...rest}
    >
      {icon && <span sx={{ mr: 2, color: 'textMuted', '& > svg': { width: '20px', height: '20px' } }}>{icon}</span>}
      {children && <span>{children}</span>}
    </a>
  );
});
