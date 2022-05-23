import { FC, ReactNode, useMemo } from 'react';
import styles from './index.module.scss';

interface ICardCheckerProps {
  checked: boolean;
  children: ReactNode;
  onClick: () => void;
}

const CardChecker: FC<ICardCheckerProps> = (props) => {
  const { checked, children, onClick } = props;
  const background = useMemo(
    () => (checked ? '#3bb346' : '#a9abc6'),
    [checked]
  );

  return (
    <div className={styles.wrapper} style={{ background }} onClick={onClick}>
      {children}
    </div>
  );
};

export default CardChecker;
