/** @jsx jsx */
import { jsx, Flex, Text, Box, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/core';
import useSWR from 'swr';
import NextLink from 'next/link';
import { AiOutlineEllipsis } from 'react-icons/ai';

import { MainLayout } from '../../components/layouts/MainLayout';
import { Card } from '../../components/core/Card';
import useUser from '../../libs/useUser';
import { Gravatar } from '../../components/Gravatar';
import { IUser } from '../../interfaces/IUser';

export default function Users() {
  const { user } = useUser({
    redirectTo: '/login',
  });

  const { data } = useSWR<Array<IUser>, any>(user?.roleId === 1 ? '/account' : null);

  return (
    <MainLayout>
      {data?.map((user) => (
        <Card key={user.userId} maxW="lg" m="0 auto" mb={3} sx={{ py: 1, pr: 1 }}>
          <Flex justifyContent="space-between">
            <Flex alignItems="center">
              <Gravatar
                size="sm"
                email={user.email}
                sx={{
                  boxShadow: (theme) => (user.roleId === 1 ? `0 0 0 4px ${theme.colors.red['500']}` : undefined),
                }}
              />
              <Text fontWeight="bold" ml="2">
                {user.username}
              </Text>
            </Flex>
            <Box>
              <Menu>
                <MenuButton as={Button} variant="ghost">
                  <AiOutlineEllipsis />
                </MenuButton>
                <MenuList>
                  <NextLink href={`/users/${user.userId}`} passHref>
                    <MenuItem as="a">Edit</MenuItem>
                  </NextLink>
                  <MenuItem color="red.500">Delete</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </Card>
      ))}
    </MainLayout>
  );
}
