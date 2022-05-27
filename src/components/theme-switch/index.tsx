import { FC, useContext } from 'react';
import { IconMoon, IconSun } from '@douyinfe/semi-icons';
import styles from './index.module.scss';
import { ThemeModeEnum } from '@/common/models';
import { Button } from '@douyinfe/semi-ui';
import { appContext } from '@/app/context';

const ThemeSwitch: FC = () => {
  const { themeMode, toggleTheme } = useContext(appContext);

  return (
    <div className={styles.wrapper} onClick={toggleTheme}>
      {themeMode === ThemeModeEnum.Light ? (
        <Button theme='borderless' type='tertiary' icon={<IconMoon />} />
      ) : (
        <Button theme='borderless' type='tertiary' icon={<IconSun />} />
      )}
    </div>
  );
};

export default ThemeSwitch;
