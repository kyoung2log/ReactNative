import { useEffect } from 'react';
import { queryStringType } from '../../App';

export const APIs = {};

// 전역 설정
const DeviceSetting = ({ children }) => {
  useEffect(() => {
    // 1. 안드로이드에서 수신 대기
    document.addEventListener('message', (message: queryStringType) => {
      const response = JSON.parse(message.data);
      const query = Object.keys(response)[0];
      const resolve = APIs[query];

      resolve({ data: response });
      delete APIs[query];
    });

    // 2. IOS에서 수신 대기
    window.addEventListener('message', (message: any) => {
      const response = JSON.parse(message.data);
      console.log(response);
      const query = Object.keys(response)[0];
      const resolve = APIs[query];

      resolve({ data: response });
      delete APIs[query];
    });
  }, []);

  return <>{children}</>;
};

export default DeviceSetting;
