/** @jsx jsx */
import { jsx, SystemStyleObject } from '@chakra-ui/core';
import { FC, ReactNode, forwardRef } from 'react';
import { useRouter } from 'next/dist/client/router';

interface ISidebarMenuProps {}

export const SidebarMenu: FC<ISidebarMenuProps> = ({ children }) => {
  return <div sx={{ display: 'flex', flexDirection: 'column' }}>{children}</div>;
};

interface ISidebarMenuItemProps {
  icon: ReactNode;
  sx?: SystemStyleObject;
  href?: string;
  collapsed?: boolean;
}

export const SidebarMenuItem: FC<ISidebarMenuItemProps> = forwardRef<HTMLAnchorElement, ISidebarMenuItemProps>(
  function SidebarMenuItem({ children, icon, sx, href, collapsed, ...rest }, ref) {
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
          color: 'gray.800',
          fontWeight: 'normal',
          fontSize: 'xl',
          '&:hover': {
            color: 'yellow.500',
            svg: {
              color: 'yellow.500',
            },
          },
          '&[aria-current="page"]': {
            color: 'yellow.400',
            svg: {
              color: 'yellow.400',
            },
          },
          cursor: 'pointer',
        }}
        aria-current={router.asPath === href ? 'page' : undefined}
        {...rest}
      >
        {icon && <span sx={{ mr: 3, '& > svg': { width: '32px', height: '32px' } }}>{icon}</span>}
        {children && <span sx={{ display: collapsed ? 'none' : undefined, width: '100%' }}>{children}</span>}
      </a>
    );
  },
);
