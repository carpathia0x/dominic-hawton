import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

function BackButton({ href, text = 'Back' }) {
  return (
    <Link href={`/${href}`} passHref>
      <Button size="xs">&larr; {text}</Button>
    </Link>
  );
}

export default BackButton;
