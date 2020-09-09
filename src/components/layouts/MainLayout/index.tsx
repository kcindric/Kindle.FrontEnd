/** @jsx jsx */
import {
  jsx,
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
  Text,
} from '@chakra-ui/core';
import { FC, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { mode } from '@chakra-ui/theme-tools';
import { AiOutlineMenu, AiOutlineUpload, AiOutlineHighlight, AiOutlineUser } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import NextLink from 'next/link';

import { Sider } from 'components/Sider';
import { Header } from '../../core/Header';
import { Gravatar } from '../../Gravatar';
import { fetcher } from '../../../libs/fetcher';
import { SidebarMenu, SidebarMenuItem } from '../../core/SidebarMenu';
import useUser from '../../../libs/useUser';
import { MenuUserInfo } from '../../MenuUserInfo';
import { navigationCollapsedState } from '../../../recoil/atoms';

export const MainLayout: FC = ({ children }) => {
  const { user, mutateUser } = useUser({ redirectTo: '/login' });
  const [collapsed, setCollapsed] = useRecoilState(navigationCollapsedState);
  const { colorMode, toggleColorMode } = useColorMode();

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };

  const logout = useCallback(() => {
    mutateUser(
      fetcher('/account/logout', {
        method: 'POST',
      }),
    );
  }, []);

  return (
    <>
      <Header>
        <Button aria-label="Menu toggle" variant="icon" onClick={toggle} px={2}>
          <AiOutlineMenu sx={{ width: '20px', height: '20px' }} />
        </Button>
        <Box sx={{ mx: 3, width: '1px', height: '20px', bg: 'gray.300' }} />
        <Flex sx={{ flex: 1, justifyContent: 'space-between' }}>
          <Heading as="h1" size="lg">
            <img src="/images/logo.svg" sx={{ width: '32px', mr: 2, mt: -2, display: 'inline-block' }} />
            Linia
          </Heading>
          <HStack spacing="24px" pr={2}>
            <Button variant="icon" onClick={toggleColorMode}>
              {colorMode === 'light' ? <FaMoon /> : <FaSun />}
            </Button>
            {user && (
              <Box>
                <Menu>
                  <MenuButton>
                    <Gravatar size="sm" email={user.email} />
                  </MenuButton>
                  <MenuList sx={{ pt: 0 }}>
                    <MenuUserInfo user={user} />
                    <NextLink href="/settings" passHref>
                      <MenuItem as="a">Settings</MenuItem>
                    </NextLink>
                    <MenuItem onClick={logout}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            )}
          </HStack>
        </Flex>
      </Header>
      <Sider collapsed={collapsed}>
        {user && (
          <SidebarMenu sx={{ mt: 3 }}>
            <NextLink href="/" passHref>
              <SidebarMenuItem collapsed={collapsed} icon={<AiOutlineUpload />}>
                Upload
              </SidebarMenuItem>
            </NextLink>
            <NextLink href="/highlights" passHref>
              <SidebarMenuItem collapsed={collapsed} icon={<AiOutlineHighlight />}>
                Highlights
              </SidebarMenuItem>
            </NextLink>
          </SidebarMenu>
        )}
        {user?.roleId === 1 ? (
          <SidebarMenu>
            <NextLink href="/users" passHref>
              <SidebarMenuItem collapsed={collapsed} icon={<AiOutlineUser />}>
                Users
              </SidebarMenuItem>
            </NextLink>
          </SidebarMenu>
        ) : null}
        <Text
          fontSize="xs"
          py={2}
          px={3}
          sx={{ position: 'absolute', left: 0, bottom: 0 }}
          style={{ opacity: collapsed ? 0 : 1 }}
        >
          Linia &copy; 2020
        </Text>
      </Sider>
      <main
        sx={{
          position: 'relative',
          bg: mode('white', 'gray.800')({ colorMode }),
          flex: 1,
          zIndex: 0,
          display: 'flex',
          flexDirection: 'column',
          pt: '58px',
        }}
        style={{
          paddingLeft: collapsed ? '56px' : '256px',
        }}
      >
        <div sx={{ p: 3, flex: 1 }}>{user && children}</div>
      </main>
    </>
  );
};
