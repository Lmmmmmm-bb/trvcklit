import { FC, useMemo, PropsWithChildren, useContext } from 'react';
import { motion } from 'framer-motion';
import { checkerColor, motionProps } from './config';
import styles from './index.module.scss';
import { ThemeModeEnum } from '@/common/models';
import { appContext } from '@/app/context';

interface ICardCheckerProps {
  checked: boolean;
  onClick: () => void;
}

const CardChecker: FC<PropsWithChildren<ICardCheckerProps>> = (props) => {
  const { checked, children, onClick } = props;
  const { themeMode } = useContext(appContext);
  const background = useMemo(
    () =>
      checked
        ? checkerColor.checked
        : themeMode === ThemeModeEnum.Dark
        ? checkerColor.darkUnchecked
        : checkerColor.unchecked,
    [checked, themeMode]
  );

  return (
    <motion.div
      className={styles.wrapper}
      style={{ background }}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default CardChecker;
