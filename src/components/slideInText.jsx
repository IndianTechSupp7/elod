import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SlideInText = ({ children, className, initial={opacity: 0, y: -100}, animate={opacity: 1, y: 0}, duration=0.3, delay=0.0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      className={className}
      ref={ref}
      initial={initial}
      animate={isInView ? animate : {}}
      transition={{ duration: duration, ease: "easeOut", delay: delay}}
    >
      {children}
    </motion.div>
  );
};

export default SlideInText;
