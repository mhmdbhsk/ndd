'use client';

import React, { useEffect } from 'react';

import { Container } from '@/components/container';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { LayoutGroup, motion } from 'framer-motion';
import { IconBrandGithub, IconBrandJustd } from 'justd-icons';
import { usePathname } from 'next/navigation';
import { ListBox, ListBoxItem, type ListBoxItemProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { Button, buttonStyles, Link, Sheet, SheetBody, SheetContent, SheetHeader, SheetTitle, useMediaQuery } from 'ui';

const navigations = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
  {
    name: 'Login',
    url: '/login',
  },
  {
    name: 'Components',
    url: 'https://justd.co/components',
  },
  {
    name: 'Colors',
    url: 'https://justd.co/colors',
  },
  {
    name: 'Icons',
    url: 'https://getjustd.com/icons',
  },
];

export function Nav() {
  const isMobile = useMediaQuery('(max-width: 640px)');
  return (
    <nav className="border-b bg-background py-2.5 sm:py-1">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-8">
            <Link href="/" className="">
              <IconBrandJustd className="size-5" />
            </Link>
            {!isMobile && (
              <span className="hidden sm:inline">
                <NavContent />
              </span>
            )}
          </div>
          <div className="flex items-center justify-end gap-2">
            <ThemeSwitcher />
            <Link
              aria-label="GitHub"
              className={buttonStyles({ appearance: 'outline', size: 'square-petite' })}
              href="https://github.com/irsyadadl/next-starter-kit"
            >
              <IconBrandGithub />
            </Link>
            <Link
              aria-label="Justd"
              className={buttonStyles({ appearance: 'outline', size: 'square-petite' })}
              href="https://justd.co"
            >
              <IconBrandJustd />
            </Link>
            {isMobile && <NavResponsive />}
          </div>
        </div>
      </Container>
    </nav>
  );
}

const navStyles = tv({
  base: 'text-sm relative py-0 sm:py-4 inline-flex focus:outline-none focus-visible:text-fg font-medium',
  variants: {
    isCurrent: {
      true: 'text-fg',
      false: 'text-muted-fg',
    },
  },
});

function NavResponsive() {
  const [isOpen, setOpen] = React.useState(false);
  const pathname = usePathname();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet onOpenChange={setOpen} isOpen={isOpen}>
      <Button size="small" appearance="outline">
        Menu
      </Button>
      <SheetContent>
        <SheetHeader className="border-b p-4 text-left">
          <SheetTitle className="flex items-center gap-2 text-sm">
            <IconBrandJustd />
            Starter Kit
          </SheetTitle>
        </SheetHeader>
        <SheetBody className="-mx-2 pt-4">
          <NavContent />
        </SheetBody>
      </SheetContent>
    </Sheet>
  );
}

function NavContent() {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const id = React.useId();
  return (
    <LayoutGroup id={id}>
      <ListBox
        orientation={isMobile ? 'vertical' : 'horizontal'}
        layout={isMobile ? 'stack' : 'grid'}
        className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"
        items={navigations}
        aria-label="Navigation"
      >
        {(item) => (
          <NavLink
            textValue={item.name}
            target={['Components', 'Colors', 'Icons'].includes(item.name) ? '_blank' : undefined}
            href={item.url}
            id={item.url}
          >
            {item.name}
          </NavLink>
        )}
      </ListBox>
    </LayoutGroup>
  );
}

interface LinkProps extends ListBoxItemProps {
  isCurrent?: boolean;
  className?: string;
  children: React.ReactNode;
}

function NavLink({ children, className, ...props }: LinkProps) {
  const isCurrent = usePathname() === props.href;
  return (
    <ListBoxItem className={navStyles({ isCurrent, className })} {...props}>
      {children}
      {isCurrent && <CurrentIndicator />}
    </ListBoxItem>
  );
}

function CurrentIndicator() {
  return (
    <motion.span
      className="-left-4 absolute inset-y-0 block h-full w-0.5 rounded-full bg-fg sm:inset-auto sm:inset-x sm:bottom-[-5px] sm:h-0.5 sm:w-full"
      layoutId="current"
    />
  );
}
