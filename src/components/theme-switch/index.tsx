import { FC, useContext } from 'react';
import { Button } from '@douyinfe/semi-ui';
import { IconMoon, IconSun } from '@douyinfe/semi-icons';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './index.module.scss';
import { ThemeModeEnum } from '~/common/models';
import { appContext } from '~/app/context';
import { motionProps } from './config';

const ThemeSwitch: FC = () => {
  const { themeMode, toggleTheme } = useContext(appContext);

  return (
    <div className={styles.wrapper} onClick={toggleTheme}>
      <Button theme='borderless' type='tertiary'>
        <AnimatePresence exitBeforeEnter>
          {themeMode === ThemeModeEnum.Light ? (
            <motion.div {...motionProps} key='moon'>
              <IconMoon />
            </motion.div>
          ) : (
            <motion.div {...motionProps} key='sun'>
              <IconSun />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </div>
  );
};

export default ThemeSwitch;
