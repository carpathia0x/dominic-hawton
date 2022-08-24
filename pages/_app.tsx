import { ChakraProvider, Heading, Text } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import type { AppProps } from 'next/app';
import H1 from '../components/H1';
import H2 from '../components/H2';
import H3 from '../components/H3';
import Layout from '../components/Layout';
import '../styles/prism-dracula.css';

const components = {
  h1: H1,
  h2: H2,
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
