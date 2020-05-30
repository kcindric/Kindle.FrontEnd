import React from 'react';
import { Card, Button, Heading, Field, Flex, Label, Checkbox, Link, Text, Styled } from 'theme-ui';
import { useForm } from 'react-hook-form';
import NextLink from 'next/link';

import { AuthLayout } from '../components/layouts/AuthLayout';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <AuthLayout>
      <Card sx={{ boxShadow: 'lg', p: 3, minWidth: '400px' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading as={Styled.h2} sx={{ textAlign: 'center', mb: 3 }}>
            Login form
          </Heading>
          <Field label="Email" name="email" placeholder="Enter email" ref={register} mb={3} />
          <Field label="Password" name="password" placeholder="Enter password" ref={register} mb={4} />
          <Flex mb={3} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Label>
                <Checkbox name="remember-me" value="yes" ref={register} />
                Remember me
              </Label>
            </div>
            <NextLink href="/forgot-password">
              <Link>Forgot Password?</Link>
            </NextLink>
          </Flex>
          <Button type="submit" sx={{ width: '100%' }}>
            Login
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
