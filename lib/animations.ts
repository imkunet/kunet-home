const pageVariants = {
  initial: {
    opacity: 0,
    y: '-5rem'
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: '5rem'
  }
};

const pageTransition = {
  type: 'spring',
  stiffness: 400,
  damping: 40
};

export { pageVariants, pageTransition };
