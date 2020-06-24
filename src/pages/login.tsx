import React from 'react';
import { Card, Button, Heading, Field, Flex, Label, Checkbox, Link, Text, Styled } from 'theme-ui';
import { useForm } from 'react-hook-form';
import NextLink from 'next/link';

import { AuthLayout } from '../components/layouts/AuthLayout';
import { fetcher } from '../libs/fetcher';
import useUser from '../libs/useUser';

interface ILoginFieldValues {
  username: string;
  password: string;
}

export default function Login() {
  const { mutateUser } = useUser({
    redirectTo: '/',
    redirectIfFound: true,
  });

  const { register, handleSubmit } = useForm<ILoginFieldValues>();

  async function onSubmit(data: ILoginFieldValues) {
    const body = {
      username: data.username,
      password: data.password,
    };

    try {
      await mutateUser(
        fetcher('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }),
      );
    } catch (error) {
      console.error('An unexpected error happened:', error);
      // setErrorMsg(error.data.message);
    }
  }

  return (
    <AuthLayout>
      <Card sx={{ boxShadow: 'lg', p: 3, minWidth: '400px' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading as={Styled.h2} sx={{ textAlign: 'center', mb: 3 }}>
            Login form
          </Heading>
          <Field label="username" name="username" placeholder="Enter email" ref={register} mb={3} />
          <Field label="Password" name="password" placeholder="Enter password" ref={register} mb={4} />
          <Flex mb={3} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Label>
                <Checkbox name="remember-me" value="yes" ref={register} />
                Remember me
              </Label>
            </div>
            <NextLink href="/forgot-password" as={`${process.env.linkPrefix}/forgot-password`}>
              <Link>Forgot Password?</Link>
            </NextLink>
          </Flex>
          <Button type="submit" sx={{ width: '100%' }}>
            Login
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
