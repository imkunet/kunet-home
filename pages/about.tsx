import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/About.module.css';
import globalStyles from '../styles/Global.module.css';
import kyleImage from '../public/kyle.webp';
import { useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';

const About: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className={styles.aboutPage}>
      <Head>
        <title>About Me</title>
      </Head>

      <div className={styles.aboutHeader}>
        <AnimatedText title={'About Me'} />
      </div>

      <motion.div className={globalStyles.pageContainer}>
        <MotionConfig transition={{ type: 'spring', stiffness: 400, damping: 40 }}>
          <motion.div className={globalStyles.justifyCenter}>
            <motion.div
              className={styles.aboutContainer}
              layoutId={'aboutContainer'}
              layout
              onClick={() => setOpen(true)}
            >
              <motion.div className={styles.aboutImageContainer} layoutId={'aboutImageContainer'} layout={'position'}>
                <Image src={kyleImage} className={styles.aboutImage} alt={'Kyle Nguyen'} />
              </motion.div>
              <span className={styles.aboutName}>Kyle Nguyen</span>
            </motion.div>
          </motion.div>

          <AnimatePresence>
            {open && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={styles.aboutPageOverlay}
                  onClick={() => setOpen(false)}
                />

                <motion.div layoutId={'aboutContainer'} className={styles.aboutContainerOpen}>
                  <motion.div
                    className={styles.aboutImageContainer}
                    layoutId={'aboutImageContainer'}
                    layout={'position'}
                  >
                    <Image src={kyleImage} className={styles.aboutImage} alt={'Kyle Nguyen'} />
                  </motion.div>
                  <motion.div>
                    Kyle Nguyen
                    <br />
                    Hello world, it&apos;s kyle!
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </MotionConfig>
      </motion.div>

      <br />

      <Link href="/">go home</Link>
    </motion.div>
  );
};

export default About;
