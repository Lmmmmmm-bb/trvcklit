import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@douyinfe/semi-ui';
import styles from './index.module.scss';
import BackgroundImg from '@/assets/background.webp';

const Switch: FC = () => {
  const navigator = useNavigate();

  const handleNavigate = (to: string) => navigator(to);

  return (
    <div className={styles.wrapper}>
      <Button theme='borderless' onClick={() => handleNavigate('you')}>
        YOU
      </Button>
      <Button theme='borderless' onClick={() => handleNavigate('me')}>
        ME
      </Button>
      <img className={styles.image} src={BackgroundImg} draggable={false} />
    </div>
  );
};

export default Switch;
