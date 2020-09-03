/** @jsx jsx */
import { jsx, Button, Heading, Input, FormLabel, Link, Text, FormControl } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { AuthLayout } from '../components/layouts/AuthLayout';
import { fetcher } from '../libs/fetcher';
import useUser from '../libs/useUser';
import { Card } from '../components/core/Card';

interface IRegisterFieldValues {
  username: string;
  password: string;
  email: string;
}

export default function Login() {
  useUser({
    redirectTo: `${process.env.linkPrefix}/`,
    redirectIfFound: true,
  });
  const router = useRouter();
  const { register, handleSubmit } = useForm<IRegisterFieldValues>();

  async function onSubmit(data: IRegisterFieldValues) {
    try {
      await fetcher('/account/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      await router.replace('/login');
    } catch (error) {
      console.error('An unexpected error happened:', error);
      // setErrorMsg(error.data.message);
    }
  }

  return (
    <AuthLayout>
      <Card sx={{ boxShadow: 'lg', p: 3, minWidth: '400px' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading as="h2" size="xl" sx={{ textAlign: 'center', mb: 3 }}>
            Sign up form
          </Heading>
          <FormControl id="username" mb={3}>
            <FormLabel>Username</FormLabel>
            <Input name="username" placeholder="Enter username" ref={register} />
          </FormControl>
          <FormControl id="password" mb={3}>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" placeholder="Enter password" ref={register} />
          </FormControl>
          <FormControl id="email" mb={3}>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" placeholder="Enter email" ref={register} />
          </FormControl>
          {/* <Flex mb={3} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Checkbox name="agree" value="yes" ref={register}>
              I agree to&nbsp;
              <NextLink href="/terms-of-services" as={`${process.env.linkPrefix}/terms-of-services`}>
                <Link>Terms</Link>
              </NextLink>
              &nbsp;and&nbsp;
              <NextLink href="/privacy-policy" as={`${process.env.linkPrefix}/privacy-policy`}>
                <Link>Privacy Policy</Link>
              </NextLink>
            </Checkbox>
          </Flex> */}
          <Button colorScheme="yellow" type="submit" sx={{ width: '100%' }}>
            Sign up
          </Button>
          <Text sx={{ textAlign: 'center', mt: 3 }}>
            <NextLink href="/login" as={`${process.env.linkPrefix}/login`}>
              <Link>Go to Log in</Link>
            </NextLink>
          </Text>
        </form>
      </Card>
    </AuthLayout>
  );
}
