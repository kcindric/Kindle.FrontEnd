import React from 'react';
import { Card, Button, Heading, Field, Styled } from 'theme-ui';
import { useForm } from 'react-hook-form';

import { AuthLayout } from '../components/layouts/AuthLayout';
import useUser from '../libs/useUser';

export default function Login() {
  useUser({
    redirectTo: '/',
    redirectIfFound: true,
  });

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <AuthLayout>
      <Card sx={{ boxShadow: 'lg', p: 3, minWidth: '400px' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading as={Styled.h2} sx={{ textAlign: 'center', mb: 3 }}>
            Forgot password
          </Heading>
          <Field label="Email" name="email" placeholder="Enter email" ref={register} mb={3} />
          <Button type="submit" sx={{ width: '100%' }}>
            Submit
          </Button>
        </form>
      </Card>
    </AuthLayout>
  );
}
