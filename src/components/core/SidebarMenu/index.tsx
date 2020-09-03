/** @jsx jsx */
import { jsx, SystemStyleObject, useColorMode } from '@chakra-ui/core';
import { mode, transparentize } from '@chakra-ui/theme-tools';
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
    const { colorMode } = useColorMode();

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
          color: mode('gray.800', 'white')({ colorMode }),
          fontWeight: 'bold',
          fontSize: 'sm',
          borderTopRightRadius: '30px',
          borderBottomRightRadius: '30px',
          '&:hover': {
            bg: mode(transparentize('gray.200', 0.5), transparentize('gray.600', 0.3))({ colorMode }),
          },
          '&[aria-current="page"]': {
            bg: mode(transparentize('yellow.300', 0.5), transparentize('yellow.600', 0.3))({ colorMode }),
          },
          cursor: 'pointer',
        }}
        aria-current={router.asPath === href ? 'page' : undefined}
        {...rest}
      >
        {icon && <span sx={{ mr: 3, '& > svg': { width: '24px', height: '24px' } }}>{icon}</span>}
        {children && <span sx={{ display: collapsed ? 'none' : undefined, width: '100%' }}>{children}</span>}
      </a>
    );
  },
);
