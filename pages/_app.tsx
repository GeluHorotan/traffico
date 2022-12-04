import type { AppProps } from 'next/app';
import Layout from '../components/layouts/Layout';
import Providers from '../context/Providers';
import '../globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Providers>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </>
  );
}
