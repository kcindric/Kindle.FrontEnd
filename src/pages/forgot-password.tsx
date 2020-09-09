import React from 'react';
import { Button, Heading, Input, FormControl, FormLabel } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';

import { AuthLayout } from '../components/layouts/AuthLayout';
import useUser from '../libs/useUser';
import { Card } from '../components/core/Card';

export default function Login() {
  useUser({
    redirectTo: `/`,
    redirectIfFound: true,
  });

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <AuthLayout>
      <Card sx={{ boxShadow: 'lg', minWidth: '400px' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading as="h2" size="lg" sx={{ textAlign: 'center', mb: 3 }}>
            Forgot password
          </Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" name="email" placeholder="Enter email" ref={register} />
          </FormControl>
          <Button type="submit" sx={{ width: '100%' }}>
            Submit
          </Button>
        </form>
      </Card>
    </AuthLayout>
  );
}
