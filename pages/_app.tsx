import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { pageTransition, pageVariants } from '../lib/animations';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="theme-color" content="#3b4191" />
        <meta property="og:image" content="/KNL.webp" />
        <meta
          name="description"
          content="Hello. My name is Kyle Nguyen and I go by KuNet on the internet! Welcome to my site, KuNet.dev!"
        />
      </Head>
      <div className={'pageContainer'}>
        <AnimatePresence>
          <motion.div
            style={{ position: 'absolute' }}
            initial={'initial'}
            animate={'in'}
            exit={'out'}
            variants={pageVariants}
            transition={pageTransition}
            className={'animatedPage noOverflow'}
            key={router.route}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default MyApp;
