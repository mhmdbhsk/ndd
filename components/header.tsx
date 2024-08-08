'use client';

import { Container } from '@/components/container';
import { CardDescription, CardHeader, CardTitle } from 'ui';

interface HeaderProps {
  title: string;
  description: string;
}

export function Header({ title, description }: HeaderProps) {
  return (
    <header className="-mt-6 mb-12 border-b py-6 sm:py-12">
      <Container>
        <CardHeader className="max-w-xl p-0">
          <CardTitle level={1} className="text-xl sm:text-2xl">
            {title}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">{description}</CardDescription>
        </CardHeader>
      </Container>
    </header>
  );
}
