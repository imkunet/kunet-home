import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/About.module.css';
import globalStyles from '../styles/Global.module.css';
import kyleImage from '../public/kyle.webp';
import { useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';

const About: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.aboutPage}>
      <Head>
        <title>About Me</title>
      </Head>

      <div className={styles.aboutHeader}>
        <span>About Me</span>
      </div>

      <div className={globalStyles.pageContainer}>
        <m.div className={styles.aboutContainer} onClick={() => setOpen(true)}>
          <m.div className={styles.aboutImageContainer}>
            <Image src={kyleImage} className={styles.aboutImage} alt={'Kyle Nguyen'} />
          </m.div>
          <span className={styles.aboutName}>Kyle Nguyen</span>
        </m.div>

        <AnimatePresence exitBeforeEnter>
          {open && <m.div layout className={styles.aboutPageOverlay} onClick={() => setOpen(false)} />}
        </AnimatePresence>
      </div>

      <br />

      <Link href="/">go home</Link>
    </div>
  );
};

export default About;
