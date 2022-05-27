import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Divider } from '@douyinfe/semi-ui';
import { IconArrowLeft } from '@douyinfe/semi-icons';
import styles from './index.module.scss';
import CardChecker from '@/components/card-checker';
import { useChecklist } from '@/common/hooks';
import { motionProps } from './config';
import { LocalKeysEnum } from '@/common/models';
import ThemeSwitch from '@/components/theme-switch';

const You: FC = () => {
  const navigator = useNavigate();
  const { setCheckItem, category, isFetching, refresh } = useChecklist(
    LocalKeysEnum.You
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <Button
          theme='borderless'
          type='tertiary'
          icon={<IconArrowLeft />}
          onClick={() => navigator('/')}
        />
        {isFetching ? (
          <motion.div
            layoutId='loadingLayout'
            className={styles.title}
            {...motionProps}
          >
            ...
          </motion.div>
        ) : (
          <motion.h3
            layoutId='loadingLayout'
            className={styles.title}
            onClick={refresh}
            {...motionProps}
          >
            YOU
          </motion.h3>
        )}
        <ThemeSwitch />
      </div>
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

export default You;
