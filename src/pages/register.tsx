/** @jsx jsx */
import { jsx, Button, Heading, Input, FormLabel, Link, Text, FormControl } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { AuthLayout } from '../components/layouts/AuthLayout';
import { fetcher } from '../libs/fetcher';
import useUser from '../libs/useUser';
import { Card } from '../components/core/Card';
import { IErrorMessage } from '../interfaces/IErrorMessage';
import { PasswordInput } from '../components/forms/PasswordField';

interface IRegisterFieldValues {
  username: string;
  password: string;
  email: string;
}

export default function Login() {
  useUser({
    redirectTo: `/`,
    redirectIfFound: true,
  });
  const router = useRouter();
  const { register, handleSubmit, errors, setError } = useForm<IRegisterFieldValues>();

  async function onSubmit(data: IRegisterFieldValues) {
    try {
      await fetcher('/account/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      await router.replace('/login');
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
      <Card sx={{ boxShadow: 'lg', p: 3, minWidth: '400px' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading as="h2" size="xl" sx={{ textAlign: 'center', mb: 3 }}>
            Sign up form
          </Heading>
          <FormControl id="username" mb={3} isRequired isInvalid={!!errors.username}>
            <FormLabel>Username</FormLabel>
            <Input name="username" placeholder="Enter username" ref={register({ required: true })} />
            <ErrorMessage as={Text} errors={errors} name="username" color="red.600" />
          </FormControl>
          <FormControl id="password" mb={3} isRequired isInvalid={!!errors.password}>
            <FormLabel>Password</FormLabel>
            <PasswordInput name="password" placeholder="Enter password" ref={register({ required: true })} />
            <ErrorMessage as={Text} errors={errors} name="password" color="red.600" />
          </FormControl>
          <FormControl id="email" mb={3} isRequired isInvalid={!!errors.email}>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" placeholder="Enter email" ref={register({ required: true })} />
            <ErrorMessage as={Text} errors={errors} name="email" color="red.600" />
          </FormControl>
          {/* <Flex mb={3} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Checkbox name="agree" value="yes" ref={register}>
              I agree to&nbsp;
              <NextLink href="/terms-of-services" >
                <Link>Terms</Link>
              </NextLink>
              &nbsp;and&nbsp;
              <NextLink href="/privacy-policy" >
                <Link>Privacy Policy</Link>
              </NextLink>
            </Checkbox>
          </Flex> */}
          <Button colorScheme="yellow" type="submit" sx={{ width: '100%' }}>
            Sign up
          </Button>
          <Text sx={{ textAlign: 'center', mt: 3 }}>
            <NextLink href="/login">
              <Link>Go to Log in</Link>
            </NextLink>
          </Text>
        </form>
      </Card>
    </AuthLayout>
  );
}
