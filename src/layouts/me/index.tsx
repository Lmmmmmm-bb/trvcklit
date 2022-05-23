import { FC } from 'react';
import { motion } from 'framer-motion';
import styles from './index.module.scss';
import CardChecker from '@/components/card-checker';
import { useChecklist } from '@/common/hooks';
import { motionProps } from './config';
import { Divider } from '@douyinfe/semi-ui';
import { LocalKeysEnum } from '@/common/models';

const Me: FC = () => {
  const { setCheckItem, category } = useChecklist(LocalKeysEnum.Me);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>ME</h3>
      <motion.div {...motionProps}>
        {Object.keys(category).map((key) => {
          const currentCategory = category[key];
          return (
            <div key={key}>
              <Divider className={styles.divider} align='left'>
                {key}
              </Divider>
              <div className={styles.cardWrapper}>
                {currentCategory.map(({ id, checked, name }) => (
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
        })}
      </motion.div>
    </div>
  );
};

export default Me;
