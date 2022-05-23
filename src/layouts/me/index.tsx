import { FC } from 'react';
import styles from './index.module.scss';
import CardChecker from '@/components/card-checker';
import { useChecklist } from '@/common/hooks';

const Me: FC = () => {
  const { checklist, setCheckItem } = useChecklist();

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>ME</h3>
      <div className={styles.cardWrapper}>
        {checklist.map(({ id, name, checked }) => (
          <CardChecker
            key={id}
            checked={checked}
            onClick={() => setCheckItem(id)}
          >
            {name}
          </CardChecker>
        ))}
      </div>
    </div>
  );
};

export default Me;
