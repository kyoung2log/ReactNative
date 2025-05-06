import { APIs } from '.';
import { queryStringType } from '../../App';

declare const window: Window & {
  ReactNativeWebView: {
    postMessage: (message: string) => void;
  };
};

// 전역에서는 해당 훅을 사용해 데이터를 페칭할 수 있음
export const useDeviceSetting = () => {
  const fetchApp = async ({ query }: { query: queryStringType }) => {
    return await new Promise((resolve) => {
      APIs[query] = resolve;
      window.ReactNativeWebView.postMessage(JSON.stringify({ query }));
    });
  };

  return { fetchApp };
};
