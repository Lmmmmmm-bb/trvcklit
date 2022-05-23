import { FC } from 'react';
import { motion } from 'framer-motion';
import styles from './index.module.scss';
import CardChecker from '@/components/card-checker';
import { useChecklist } from '@/common/hooks';
import { motionProps } from './config';

const Me: FC = () => {
  const { checklist, setCheckItem } = useChecklist();

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>ME</h3>
      <motion.div className={styles.cardWrapper} {...motionProps}>
        {checklist.map(({ id, name, checked }) => (
          <CardChecker
            key={id}
            checked={checked}
            onClick={() => setCheckItem(id)}
          >
            {name}
          </CardChecker>
        ))}
      </motion.div>
    </div>
  );
};

export default Me;
