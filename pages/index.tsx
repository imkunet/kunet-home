import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import AboutCard from '../components/AboutCard';
import AnimatedText from '../components/AnimatedText';
import globalStyles from '../styles/Global.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <AboutCard />
      <div className={globalStyles.justifyCenter}>
        <motion.div className={globalStyles.pageContainer}>
          <div className={globalStyles.headerText}>
            <AnimatedText title={'Articles'} />
            <ArticleLink />
          </div>
        </motion.div>
      </div>
    </>
  );
};

const ArticleLink: FunctionComponent = () => {
  return (
    <>
      <p>Hello world Article</p>
      <Link href={'/article/test'}>Go to article -&gt;</Link>
    </>
  );
};

export default Home;
