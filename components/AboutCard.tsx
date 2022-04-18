import Image from 'next/image';
import styles from '../styles/About.module.css';
import globalStyles from '../styles/Global.module.css';
import kyleImage from '../public/kyle.webp';
import { FunctionComponent, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import { useKeyboardShortcuts } from 'use-keyboard-shortcuts';

const AboutCard: FunctionComponent = () => {
  const [open, setOpen] = useState(false);

  useKeyboardShortcuts([{ keys: ['Escape'], onEvent: () => setOpen(false) }]);

  return (
    <motion.div className={styles.aboutPage}>
      <motion.div className={globalStyles.pageContainer}>
        <div className={styles.aboutHeader}>
          <AnimatedText title={'About Me'} />
        </div>

        <MotionConfig transition={{ type: 'spring', stiffness: 600, damping: 50 }}>
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
              <motion.span className={styles.aboutName} layoutId={'aboutName'}>
                Kyle Nguyen
              </motion.span>
              <motion.div layoutId={'aboutContentContainer'} className={styles.aboutContentContainer} />
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
                  <motion.span className={styles.aboutName} layoutId={'aboutName'}>
                    Kyle Nguyen
                  </motion.span>
                  <motion.div layoutId={'aboutContentContainer'} className={styles.aboutContentContainer}>
                    <motion.div className={styles.aboutContent}>
                      <span className={styles.aboutContentHeader}>
                        🌸 Hello World!
                        <br />
                      </span>
                      <hr />
                      Hi! My name is <span className={styles.textGradient}>Kyle Nguyen</span> and I&apos;m a software
                      engineer based in the Bay Area 🌉. On the internet, I&apos;m called ✨ KuNet ✨ which is based off
                      of my name. My pronouns are they/he 👋.
                      <br />
                      <br />
                      Currently, I&apos;m a 17 year old high school student but am planning to go to college to study
                      Computer Science 💻. My passions include swimming 🏊 and playing video games 🎮.
                    </motion.div>
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </MotionConfig>
      </motion.div>
    </motion.div>
  );
};

export default AboutCard;
