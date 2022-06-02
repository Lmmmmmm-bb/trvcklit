import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@douyinfe/semi-ui';
import { IconFemale, IconMale } from '@douyinfe/semi-icons';
import styles from './index.module.scss';
import BackgroundImg from '/background.webp';
import ThemeSwitch from '@/components/theme-switch';

const Switch: FC = () => {
  const navigator = useNavigate();

  const handleNavigate = (to: string) => navigator(to);

  return (
    <div className={styles.wrapper}>
      <div className={styles.themeWrapper}>
        <ThemeSwitch />
      </div>
      <div className={styles.innerWrapper}>
        <Button
          theme='borderless'
          icon={<IconFemale />}
          onClick={() => handleNavigate('you')}
        >
          YOU
        </Button>
        <Button
          theme='borderless'
          icon={<IconMale />}
          onClick={() => handleNavigate('me')}
        >
          ME
        </Button>
        <img
          className={styles.image}
          alt='background'
          src={BackgroundImg}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Switch;
