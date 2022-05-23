import { FC, ReactNode, useMemo } from 'react';
import { motion } from 'framer-motion';
import styles from './index.module.scss';
import { motionProps } from './config';

interface ICardCheckerProps {
  checked: boolean;
  children: ReactNode;
  onClick: () => void;
}

const CardChecker: FC<ICardCheckerProps> = (props) => {
  const { checked, children, onClick } = props;
  const background = useMemo(
    () => (checked ? '#3bb346' : '#a9abc6'),
    [checked]
  );

  return (
    <motion.div
      className={styles.wrapper}
      style={{ background }}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default CardChecker;
