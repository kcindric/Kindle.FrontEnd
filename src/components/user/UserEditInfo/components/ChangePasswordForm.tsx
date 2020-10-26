import { Box, Button, Text, useToast, VStack } from '@chakra-ui/core';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { PasswordField } from '../../../forms/PasswordField';
import { fetcher } from '../../../../libs/fetcher';
import { IUser } from '../../../../interfaces/IUser';

type FormValues = {
  password: string;
  confirmPassword: string;
};

interface IChangePasswordFormProps {
  user: IUser;
}

export const ChangePasswordForm: FC<IChangePasswordFormProps> = ({ user }) => {
  const toast = useToast();
  const { register, errors, handleSubmit, formState, reset } = useForm<FormValues>();
  const { isSubmitting } = formState;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await fetcher('/account/update-email', {
        method: 'POST',
        body: JSON.stringify({
          userId: user?.userId,
          email: user?.email,
          password: data.password,
        }),
      });
      reset();
      toast({
        title: 'Success!',
        description: 'Password is updated!',
        status: 'success',
        isClosable: true,
      });
    } catch (e) {
      toast({
        title: 'Error!',
        description: e.message,
        status: 'error',
        isClosable: true,
      });
    }
  };

  return (
    <VStack spacing={4} align="stretch" as="form" onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <PasswordField
          name="password"
          placeholder="Enter old password"
          ref={register({
            required: 'Required!',
          })}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => (
            <Text color="red.400" fontSize="sm" px={4}>
              {message}
            </Text>
          )}
        />
      </Box>
      <Box>
        <PasswordField
          name="confirmPassword"
          placeholder="Enter new password"
          ref={register({
            required: 'Required!',
          })}
        />
        <ErrorMessage
          errors={errors}
          name="confirmPassword"
          render={({ message }) => (
            <Text color="red.400" fontSize="sm" px={4}>
              {message}
            </Text>
          )}
        />
      </Box>
      <Button type="submit" colorScheme="yellow" width="100%" isLoading={isSubmitting}>
        Update password
      </Button>
    </VStack>
  );
};
