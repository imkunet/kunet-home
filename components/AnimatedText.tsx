import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';

const animatedText = {
  in: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.1
    }
  }
};

const letterAnimation = {
  initial: { y: 30, opacity: 0 },
  in: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.145, 0.095, 0.0, 1.0],
      duration: 1
    }
  }
};

interface AnimatedTextProps {
  title: string;
}

const AnimatedText: FunctionComponent<AnimatedTextProps> = (props: AnimatedTextProps) => {
  return (
    <motion.span variants={animatedText} initial={'initial'} animate={'in'}>
      {props.title.split('').map((letter, index) => (
        <motion.span
          style={{ display: 'inline-block', width: letter === ' ' ? '0.5ch' : '' }}
          variants={letterAnimation}
          key={index}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
