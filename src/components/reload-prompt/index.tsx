import { FC } from 'react';
import { Toast } from '@douyinfe/semi-ui';
import { useRegisterSW } from 'virtual:pwa-register/react';
import styles from './index.module.scss';

const UPDATE_SW_MS = 30 * 24 * 60 * 60 * 1000;

const ReloadPrompt: FC = () => {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker
  } = useRegisterSW({
    onRegistered: (r) => {
      r &&
        setInterval(() => {
          r.update();
        }, UPDATE_SW_MS);
    },
    onRegisterError: (error) => {
      Toast.error('SW 注册失败');
      // eslint-disable-next-line no-console
      console.error('SW registration error', error);
    }
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <div className={styles.wrapper}>
      {(offlineReady || needRefresh) && (
        <div className={styles.toast}>
          <div className={`${styles.message} toast-message`}>
            {offlineReady ? (
              <span>应用程序已准备好离线工作</span>
            ) : (
              <span>有新内容可用，点击重新加载按钮进行更新。</span>
            )}
          </div>
          {needRefresh && (
            <button
              className={styles.button}
              onClick={() => updateServiceWorker(true)}
            >
              重新加载
            </button>
          )}
          <button className={styles.button} onClick={close}>
            关闭
          </button>
        </div>
      )}
    </div>
  );
};

export default ReloadPrompt;
