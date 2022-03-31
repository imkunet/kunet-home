import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';

const animatedText = {
  in: {
    transition: {
      delayChildren: 0.45,
      staggerChildren: 0.15
    }
  }
};

const letterAnimation = {
  initial: { y: 400 },
  in: {
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

interface AnimatedTextProps {
  title: string;
}

const AnimatedText: FunctionComponent<AnimatedTextProps> = (props: AnimatedTextProps) => {
  return (
    <motion.span>
      {props.title.split('').map((letter, index) => (
        <motion.span variants={letterAnimation} initial={'initial'} animate={'in'} key={index}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
