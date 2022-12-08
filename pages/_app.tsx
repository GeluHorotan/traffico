import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '../components/layouts/Layout';
import Providers from '../context/Providers';
import '../globals.css';

export default function App({ Component, pageProps }: AppProps) {
  // Use the useRouter hook to get the Router object
  const router = useRouter();

  // Check if the current page is the 404 page
  const is404Page = router.pathname === '/[...slug]';
  console.log(router.pathname);

  if (is404Page) {
    return (
      <Providers>
        <Component {...pageProps} />
      </Providers>
    );
  }
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
