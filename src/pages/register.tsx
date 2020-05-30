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
            Sign up form
          </Heading>
          <Field label="First name" name="first-name" placeholder="Enter first name" ref={register} mb={3} />
          <Field label="Last name" name="last-name" placeholder="Enter last name" ref={register} mb={3} />
          <Field label="Email" name="email" placeholder="Enter email" ref={register} mb={3} />
          <Field label="Phone number" name="phone" placeholder="Enter a phone number" ref={register} mb={3} />
          <Field label="Password" name="password" placeholder="Enter password" ref={register} mb={3} />
          <Field
            label="Confirm password"
            name="confirm-password"
            placeholder="Enter password again"
            ref={register}
            mb={4}
          />
          <Flex mb={3} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Label>
                <Checkbox name="agree" value="yes" ref={register} />I agree to&nbsp;
                <NextLink href="/terms-of-services">
                  <Link>Terms</Link>
                </NextLink>
                &nbsp;and&nbsp;
                <NextLink href="/privacy-policy">
                  <Link>Privacy Policy</Link>
                </NextLink>
              </Label>
            </div>
          </Flex>
          <Button type="submit" sx={{ width: '100%' }}>
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
