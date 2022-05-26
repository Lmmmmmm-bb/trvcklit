import { FC, useMemo, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { checkerColor, motionProps } from './config';
import styles from './index.module.scss';

interface ICardCheckerProps {
  checked: boolean;
  onClick: () => void;
}

const CardChecker: FC<PropsWithChildren<ICardCheckerProps>> = (props) => {
  const { checked, children, onClick } = props;
  const background = useMemo(
    () => (checked ? checkerColor.checked : checkerColor.unchecked),
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
