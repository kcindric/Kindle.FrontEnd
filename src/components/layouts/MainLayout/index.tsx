/** @jsx jsx */
import {
  jsx,
  IconButton,
  Heading,
  Box,
  Flex,
  MenuButton,
  Menu,
  MenuItem,
  MenuList,
  Button,
  useColorMode,
  HStack,
} from '@chakra-ui/core';
import { useState, FC } from 'react';
import { AiOutlineMenuUnfold, AiOutlineMenuFold, AiOutlineUpload, AiOutlineHighlight } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import NextLink from 'next/link';

import { Sider } from 'components/Sider';
import { SidebarMenu, SidebarMenuItem } from '../../core/SidebarMenu';
import { Header } from '../../core/Header';
import { IUser } from '../../../interfaces/IUser';
import { Gravatar } from '../../Gravatar';

interface IMainLayoutProps {
  isLoading?: boolean;
  user?: IUser;
}

export const MainLayout: FC<IMainLayoutProps> = ({ isLoading, user, children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <>
      <Header>
        <IconButton
          aria-label="Menu toggle"
          variant="ghost"
          onClick={toggle}
          icon={
            collapsed ? (
              <AiOutlineMenuUnfold sx={{ width: '28px', height: '28px' }} />
            ) : (
              <AiOutlineMenuFold sx={{ width: '28px', height: '28px' }} />
            )
          }
        />
        <Box sx={{ mx: 3, width: '1px', height: '20px', bg: 'gray.300' }} />
        <Flex sx={{ flex: 1, justifyContent: 'space-between' }}>
          <Heading as="h1">Linia</Heading>
          <HStack spacing="24px">
            <Button variant="ghost" onClick={toggleColorMode}>
              {colorMode === 'light' ? <FaMoon /> : <FaSun />}
            </Button>
            {user && (
              <Menu>
                <MenuButton>
                  <Gravatar size="sm" email={user.email} />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => {}}>Logout</MenuItem>
                </MenuList>
              </Menu>
            )}
          </HStack>
        </Flex>
      </Header>
      <div
        sx={{
          pt: '78px',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Sider sx={{ zIndex: 1, position: 'relative' }} collapsed={collapsed}>
          {!isLoading && (
            <SidebarMenu>
              <NextLink href="/" as={`${process.env.linkPrefix}/`} passHref>
                <SidebarMenuItem collapsed={collapsed} icon={<AiOutlineUpload />}>
                  Upload
                </SidebarMenuItem>
              </NextLink>
              <NextLink href="/highlights" as={`${process.env.linkPrefix}/highlights`} passHref>
                <SidebarMenuItem collapsed={collapsed} icon={<AiOutlineHighlight />}>
                  Highlights
                </SidebarMenuItem>
              </NextLink>
            </SidebarMenu>
          )}
        </Sider>
        <main
          sx={{
            position: 'relative',
            bg: 'gray.50',
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
              bg: 'white',
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
