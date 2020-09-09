/** @jsx jsx */
import {
  jsx,
  Flex,
  Text,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
} from '@chakra-ui/core';
import { FC, useRef, useState } from 'react';
import NextLink from 'next/link';
import { AiOutlineEllipsis } from 'react-icons/ai';

import { Gravatar } from '../../../components/Gravatar';
import { Card } from '../../../components/core/Card';
import { IUser } from '../../../interfaces/IUser';

interface IUserCardProps {
  user: IUser;
  onDeleteUser(): Promise<void>;
}

export const UserCard: FC<IUserCardProps> = ({ user, onDeleteUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const cancelRef = useRef<HTMLElement>(null);

  const onClose = () => setIsOpen(false);
  const onDelete = async () => {
    setIsLoading(true);
    try {
      await onDeleteUser();
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
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
              <MenuItem
                color="red.500"
                onClick={async () => {
                  setIsOpen(true);
                }}
              >
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay sx={{ zIndex: 'modal' }}>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Account
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure? You can't undo this action afterwards.</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onDelete} isLoading={isLoading} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Card>
  );
};
