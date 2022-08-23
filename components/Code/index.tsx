import React, { useEffect } from 'react';
import Prism from 'prismjs';
import { Box, chakra } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

require('prismjs/components/prism-rust');
require('prismjs/components/prism-typescript');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-yaml');
require('prismjs/components/prism-toml');
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-css');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-tsx');

interface ICode {
  children: React.ReactNode;
  language: string;
}

function Code({ children, language }: ICode) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Box>
      <chakra.pre>
        <code className={`language-${language}`}>{children}</code>
      </chakra.pre>
    </Box>
  );
}

export default dynamic(() => Promise.resolve(Code), {
  ssr: false,
});
