/** @jsx jsx */
import { jsx, Button, Heading, FormControl, Input, Flex, FormLabel, Checkbox, Link, Text } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import NextLink from 'next/link';

import { AuthLayout } from '../components/layouts/AuthLayout';
import { fetcher } from '../libs/fetcher';
import useUser from '../libs/useUser';
import { Card } from '../components/core/Card';

interface ILoginFieldValues {
  username: string;
  password: string;
}

export default function Login() {
  const { mutateUser } = useUser({
    redirectTo: `${process.env.linkPrefix}/`,
    redirectIfFound: true,
  });

  const { register, handleSubmit, formState } = useForm<ILoginFieldValues>();

  async function onSubmit(data: ILoginFieldValues) {
    try {
      await mutateUser(
        fetcher('/account/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }),
      );
    } catch (error) {
      console.error('An unexpected error happened:', error.data.message);
      // setErrorMsg(error.data.message);
    }
  }

  return (
    <AuthLayout>
      <Card sx={{ p: 3, minWidth: '400px' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading sx={{ textAlign: 'center', mb: 3 }}>Login form</Heading>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input name="username" placeholder="Enter username" ref={register} mb={3} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" placeholder="Enter password" ref={register} mb={4} />
          </FormControl>
          <Flex mb={3} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Checkbox name="rememberMe" ref={register}>
              Remember me
            </Checkbox>
            <NextLink href="/forgot-password" as={`${process.env.linkPrefix}/forgot-password`}>
              <Link>Forgot Password?</Link>
            </NextLink>
          </Flex>
          <Button colorScheme="yellow" type="submit" sx={{ width: '100%' }}>
            {formState.isSubmitting ? 'Submitting...' : 'Login'}
          </Button>
          <Text sx={{ textAlign: 'center', mt: 3 }}>
            <NextLink href="/register" as={`${process.env.linkPrefix}/register`}>
              <Link>Create a New Account</Link>
            </NextLink>
          </Text>
        </form>
      </Card>
    </AuthLayout>
  );
}
