import { ChakraProvider, Heading, Text } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import type { AppProps } from 'next/app';
import H3 from '../components/H3';
import Layout from '../components/Layout';
import '../styles/prism-dracula.css';

const components = {
  h1: Heading,
  h2: Heading,
  h3: H3,
  p: Text,
};

function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </MDXProvider>
  );
}

export default App;
