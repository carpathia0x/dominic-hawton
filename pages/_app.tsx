import { ChakraProvider, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { MDXProvider } from '@mdx-js/react';
import type { AppProps } from 'next/app';
import H1 from '../components/H1';
import H2 from '../components/H2';
import H3 from '../components/H3';
import Layout from '../components/Layout';
import '../styles/prism-dracula.css';

const ResponsiveImage = (props) => (
  <Flex w="100%">
    <Image
      alt={props.alt}
      layout="intrinsic"
      width="2760"
      height="2666"
      {...props}
    />
  </Flex>
);

const components = {
  img: ResponsiveImage,
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
