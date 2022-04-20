import { motion, useAnimation } from 'framer-motion';
import { FunctionComponent } from 'react';
import { useInView } from 'react-intersection-observer';

const animatedText = {
  in: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.025
    }
  }
};

const letterAnimation = {
  initial: { y: 50, opacity: 0 },
  in: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 125,
      damping: 10,
      delay: 0.2
    }
  }
};

interface AnimatedTextProps {
  title: string;
}

const AnimatedText: FunctionComponent<AnimatedTextProps> = (props: AnimatedTextProps) => {
  const animationControls = useAnimation();
  const { inView, ref } = useInView();

  if (inView) animationControls.start(letterAnimation.in);

  return (
    <motion.span ref={ref} variants={animatedText} initial={'initial'} animate={'in'}>
      {props.title.split('').map((letter, index) => (
        <motion.span
          style={{ display: 'inline-block', width: letter === ' ' ? '0.5ch' : '' }}
          initial={letterAnimation.initial}
          animate={animationControls}
          key={index}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
