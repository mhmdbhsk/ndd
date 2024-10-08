'use client';

import type { FormEvent } from 'react';

import { toast } from 'sonner';
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Checkbox, Form, Link, TextField } from 'ui';

export function LoginForm() {
  const submit = (e: FormEvent) => {
    e.preventDefault();

    toast.success('Login Successful');
  };
  return (
    <Card className="rounded-none border-transparent border-y-border sm:rounded-xl sm:border-border">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <Form onSubmit={submit} className="space-y-6">
          <TextField label="Email" name="email" type="email" isRequired />
          <TextField label="Password" name="password" type="password" isRequired />
          <div className="flex items-center justify-between">
            <Checkbox>Remember me</Checkbox>
            <Link intent="primary" href="#">
              Forgot password?
            </Link>
          </div>
          <Button type="submit">Login</Button>
        </Form>
      </CardContent>
    </Card>
  );
}
