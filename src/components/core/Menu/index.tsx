/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { FC, ReactNode, forwardRef } from 'react';
import { Box } from 'theme-ui';

interface IMenuProps {}

export const Menu: FC<IMenuProps> = ({ children }) => {
  return <Box>{children}</Box>;
};

interface IMenuItemProps {
  icon: ReactNode;
  sx?: SxStyleProp;
}

export const MenuItem: FC<IMenuItemProps> = forwardRef<HTMLAnchorElement, IMenuItemProps>(function MenuItem(
  { children, icon, ...rest },
  ref,
) {
  return (
    <a ref={ref} {...rest}>
      {icon}
      {children}
    </a>
  );
});
