import { FC } from 'react';
import { Button } from '@douyinfe/semi-ui';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';

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
    </div>
  );
};

export default Switch;
