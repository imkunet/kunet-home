import type { NextPage } from 'next';
import Head from 'next/head';
import AboutCard from '../components/AboutCard';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <AboutCard />
    </>
  );
};

export default Home;
