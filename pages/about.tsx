import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/About.module.css';
import globalStyles from '../styles/Global.module.css';
import kyleImage from '../public/kyle.webp';

const About: NextPage = () => {
  return (
    <div className={styles.aboutPage}>
      <Head>
        <title>About Me</title>
      </Head>

      <div className={styles.aboutHeader}>
        <span>About Me</span>
      </div>

      <div className={globalStyles.pageContainer}>
        <div className={styles.aboutContainer}>
          <Image src={kyleImage} className={styles.aboutImage} alt={'Image of me'} />
          <span className={styles.aboutName}>Kyle Nguyen</span>
        </div>
      </div>
      <Link href="/">go home</Link>
    </div>
  );
};

export default About;
