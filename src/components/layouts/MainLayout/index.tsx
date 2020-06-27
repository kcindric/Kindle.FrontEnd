/** @jsx jsx */
import { jsx, IconButton, Heading, Box } from 'theme-ui';
import { useState, FC } from 'react';
import { AiOutlineMenuUnfold, AiOutlineMenuFold, AiOutlineUpload, AiOutlineHighlight } from 'react-icons/ai';
import NextLink from 'next/link';

import { Sider } from 'components/Sider';
import { Menu, MenuItem } from '../../core/Menu';
import { Header } from '../../core/Header';

interface IMainLayoutProps {
  isLoading?: boolean;
}

export const MainLayout: FC<IMainLayoutProps> = ({ isLoading, children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <>
      <Header>
        <IconButton onClick={toggle}>
          {collapsed ? (
            <AiOutlineMenuUnfold sx={{ width: '28px', height: '28px' }} />
          ) : (
            <AiOutlineMenuFold sx={{ width: '28px', height: '28px' }} />
          )}
        </IconButton>
        <Box sx={{ mx: 3, width: '1px', height: '20px', bg: 'gray.3' }} />
        <Heading>Linia</Heading>
      </Header>
      <div
        sx={{
          pt: '78px',
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Sider sx={{ zIndex: 1, position: 'relative' }} collapsed={collapsed}>
          {!isLoading && (
            <Menu>
              <NextLink href="/" as={`${process.env.linkPrefix}/`} passHref>
                <MenuItem collapsed={collapsed} icon={<AiOutlineUpload />}>
                  Upload
                </MenuItem>
              </NextLink>
              <NextLink href="/highlights" as={`${process.env.linkPrefix}/highlights`} passHref>
                <MenuItem collapsed={collapsed} icon={<AiOutlineHighlight />}>
                  Highlights
                </MenuItem>
              </NextLink>
            </Menu>
          )}
        </Sider>
        <main
          sx={{
            position: 'relative',
            bg: 'muted',
            flex: 1,
            zIndex: 0,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div sx={{ p: 3, flex: 1 }}>{!isLoading && children}</div>
          <footer
            sx={{
              p: 3,
              bg: 'background',
              flex: 0,
              boxShadow: 'lg',
            }}
          >
            Linia &copy; 2020
          </footer>
        </main>
      </div>
    </>
  );
};
