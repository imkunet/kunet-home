import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
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
            <AnimatedText title={'KuNet'} />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
