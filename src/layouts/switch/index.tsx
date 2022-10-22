import { FC, useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Space } from '@douyinfe/semi-ui';
import { IconFemale, IconMale } from '@douyinfe/semi-icons';
import styles from './index.module.scss';
import ThemeSwitch from '~/components/theme-switch';
import { useClientSize } from '~/common/hooks';
import { BOUNDARY_HEIGHT, linkThemeColor } from './config';
import { appContext } from '~/app/context';
import { ThemeModeEnum } from '~/common/models';
import BackgroundImg from '/background.svg';
import Logo from '/logo.svg';

const Switch: FC = () => {
  const { themeMode } = useContext(appContext);
  const { height } = useClientSize();
  const color = useMemo(
    () =>
      themeMode === ThemeModeEnum.Light
        ? linkThemeColor.light
        : linkThemeColor.dark,
    [themeMode]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.themeWrapper}>
        <ThemeSwitch />
      </div>
      <div className={styles.outerWrapper}>
        <img
          style={{ marginTop: '10%' }}
          alt='logo'
          src={Logo}
          draggable={false}
        />
        <div className={styles.innerWrapper}>
          <Link className={styles.link} style={{ color }} to='/you'>
            <Space>
              <IconFemale />
              YOU
            </Space>
          </Link>
          <Link className={styles.link} style={{ color }} to='/me'>
            <Space>
              <IconMale />
              ME
            </Space>
          </Link>
          {height > BOUNDARY_HEIGHT && (
            <img
              className={styles.image}
              alt='background'
              src={BackgroundImg}
              draggable={false}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Switch;
