/** @jsx jsx */
import { jsx, Button, Heading, FormControl, Input, Flex, FormLabel, Checkbox, Link, Text } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import NextLink from 'next/link';
import { ErrorMessage } from '@hookform/error-message';

import { AuthLayout } from '../components/layouts/AuthLayout';
import { fetcher } from '../libs/fetcher';
import useUser from '../libs/useUser';
import { Card } from '../components/core/Card';
import { IErrorMessage } from '../interfaces/IErrorMessage';
import { PasswordInput } from '../components/forms/PasswordField';
import { useRouter } from 'next/router';

interface ILoginFieldValues {
  username: string;
  password: string;
}

export default function Login() {
  useUser({
    redirectTo: `/`,
    redirectIfFound: true,
  });
  const router = useRouter();

  const { register, handleSubmit, formState, errors, setError } = useForm<ILoginFieldValues>();

  async function onSubmit(data: ILoginFieldValues) {
    try {
      await fetcher('/account/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      await router.replace('/');
    } catch (error) {
      if (Array.isArray(error.data)) {
        error.data.map((errorMessage: IErrorMessage) => {
          setError(errorMessage.propertyName.toLowerCase() as any, {
            type: 'manual',
            message: errorMessage.errorMessage,
          });
        });
      }
    }
  }

  return (
    <AuthLayout>
      <Card sx={{ p: 3, minWidth: '400px' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading sx={{ textAlign: 'center', mb: 3 }}>Login form</Heading>
          <FormControl id="username" mb={3} isRequired isInvalid={!!errors.username}>
            <FormLabel>Username</FormLabel>
            <Input name="username" placeholder="Enter username" ref={register({ required: true })} />
            <ErrorMessage as={Text} errors={errors} name="username" color="red.600" />
          </FormControl>
          <FormControl id="password" mb={4} isRequired isInvalid={!!errors.password}>
            <FormLabel>Password</FormLabel>
            <PasswordInput name="password" placeholder="Enter password" ref={register({ required: true })} />
            <ErrorMessage as={Text} errors={errors} name="password" color="red.600" />
          </FormControl>
          <Flex mb={3} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Checkbox name="rememberMe" ref={register}>
              Remember me
            </Checkbox>
            <NextLink href="/forgot-password">
              <Link>Forgot Password?</Link>
            </NextLink>
          </Flex>
          <Button colorScheme="yellow" type="submit" sx={{ width: '100%' }}>
            {formState.isSubmitting ? 'Submitting...' : 'Login'}
          </Button>
          <Text sx={{ textAlign: 'center', mt: 3 }}>
            <NextLink href="/register">
              <Link>Create a New Account</Link>
            </NextLink>
          </Text>
        </form>
      </Card>
    </AuthLayout>
  );
}
