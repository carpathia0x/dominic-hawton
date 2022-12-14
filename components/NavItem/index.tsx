import React from 'react';
import Link from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface INavItem {
  children: React.ReactNode;
  href?: string;
  icon?: string;
}

function NavItem({ children, href, icon }: INavItem) {
  const router = useRouter();
  const isActive = router.asPath === `/${href}`;
  return (
    <Link href={`/${href}`}>
      <ChakraLink
        fontSize="sm"
        fontWeight="semibold"
        color={isActive ? 'gray.900' : 'gray.500'}
        transition="color .1s ease-in"
        _hover={{
          textDecoration: 'none',
          color: 'blue.500',
        }}
      >
        {children}
      </ChakraLink>
    </Link>
  );
}

export default NavItem;
