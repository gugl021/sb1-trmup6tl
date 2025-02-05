import { useRegisterSW } from 'virtual:pwa-register/react';

export function UpdatePrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r: any) {
      console.log('Service Worker registered:', r);
    },
    onRegisterError(error: any) {
      console.error('Service Worker registration error:', error);
    },
  });
  
  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <div>
      {needRefresh && (
        <div>
          <p>A new version is available. Refresh to update?</p>
          <button onClick={() => updateServiceWorker(true)}>Refresh</button>
          <button onClick={close}>Close</button>
        </div>
      )}
      {offlineReady && (
        <div>
          <p>App is ready to work offline.</p>
          <button onClick={close}>Close</button>
        </div>
      )}
    </div>
  );
}