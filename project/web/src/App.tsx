// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 09. Bridge Promise API Refactor
import DeviceSetting from './common/settings';
import { useDeviceSetting } from './common/settings/hook';

export type queryStringType = 'fetchDeviceVersion' | 'fetchDevicePlatform' | 'fetchDeviceLocation';

export default function App() {
  // 이렇게 훅처럼 가져다 쓸 수 있다.
  const { fetchApp } = useDeviceSetting();

  const handleVersion = async () => {
    const result = await fetchApp({ query: 'fetchDeviceVersion' });
    alert(result.data.fetchDeviceVersion.appVersion); // 타입 에러
  };

  const handlePlatform = async () => {
    const result = await fetchApp({ query: 'fetchDevicePlatform' });
    alert(result.data.fetchDevicePlatform.platform); // 타ㄴ입 에러
  };

  const handleLocation = async () => {
    const result = await fetchApp({ query: 'fetchDeviceLocation' });
    alert(result.data.fetchDeviceLocation.lat); // 타입 에러
  };

  return (
    <DeviceSetting>
      <br />
      <br />
      <br />
      <button onClick={handleVersion}>버전정보</button>
      <button onClick={handlePlatform}>기종정보</button>
      <button onClick={handleLocation}>위치정보</button>
    </DeviceSetting>
  );
}

// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // 08. Bridge Promise API
// import { useEffect } from 'react';

// declare const window: Window & {
//   ReactNativeWebView: {
//     postMessage: (message: string) => void;
//   };
// };

// const APIs = {};

// export default function App() {
//   const handleVersion = async () => {
//     const result = await new Promise((resolve1) => {
//       APIs.fetchDeviceVersion = resolve1;

//       window.ReactNativeWebView.postMessage(JSON.stringify({ query: 'fetchDeviceVersion' }));
//     });

//     alert(result.data.fetchDeviceVersion.appVersion);
//   };

//   const handlePlatform = async () => {
//     const result = await new Promise((resolve2) => {
//       APIs.fetchDevicePlatform = resolve2;

//       window.ReactNativeWebView.postMessage(JSON.stringify({ query: 'fetchDevicePlatform' }));
//     });

//     alert(result.data.fetchDevicePlatform.platform);
//   };

//   const handleLocation = async () => {
//     const result = await new Promise((resolve3) => {
//       APIs.fetchDeviceLocation = resolve3;

//       window.ReactNativeWebView.postMessage(JSON.stringify({ query: 'fetchDeviceLocation' }));
//     });

//     alert(result.data.fetchDeviceLocation.lat);
//   };

//   useEffect(() => {
//     // 1. 안드로이드에서 수신 대기
//     document.addEventListener('message', (message: any) => {
//       const response = JSON.parse(message.data);
//       const query = Object.keys(response)[0];
//       const resolve = APIs[query];

//       resolve({ data: response });
//       delete APIs[query];
//       // const resolve1 = APIs.fetchDeviceVersion;
//       // const resolve2 = APIs.fetchDevicePlatform;
//       // const resolve3 = APIs.fetchDeviceLocation;

//       // resolve1(message.data);
//       // resolve2(message.data);
//       // resolve3(message.data);

//       // delete APIs.fetchDeviceVersion;
//       // delete APIs.fetchDevicePlatform;
//       // delete APIs.fetchDeviceLocation;
//     });
//     // 2. IOS에서 수신 대기
//     window.addEventListener('message', (message: any) => {
//       const response = JSON.parse(message.data);
//       const query = Object.keys(response)[0];
//       const resolve = APIs[query];

//       resolve({ data: response });
//       delete APIs[query];
//     });
//   }, []);
//   return (
//     <>
//       <br />
//       <br />
//       <br />
//       <button onClick={handleVersion}>버전정보</button>
//       <button onClick={handlePlatform}>기종정보</button>
//       <button onClick={handleLocation}>위치정보</button>
//     </>
//   );
// }

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // 07. Bridge API
// import { useEffect } from 'react';

// declare const window: Window & {
//   ReactNativeWebView: {
//     postMessage: (message: string) => void;
//   };
// };

// export default function App() {
//   const handleVersion = () => {
//     window.ReactNativeWebView.postMessage(
//       JSON.stringify({
//         query: 'fetchDeviceVersion',
//       })
//     );
//   };

//   const handlePlatform = () => {
//     window.ReactNativeWebView.postMessage(
//       JSON.stringify({
//         query: 'fetchDevicePlatform',
//       })
//     );
//   };

//   const handleLocation = () => {
//     window.ReactNativeWebView.postMessage(
//       JSON.stringify({
//         query: 'fetchDeviceLocation',
//       })
//     );
//   };

//   useEffect(() => {
//     // 1. 안드로이드에서 수신 대기
//     document.addEventListener('message', (message: any) => {
//       alert(message.data);
//     });
//     // 2. IOS에서 수신 대기
//     window.addEventListener('message', (message: any) => {
//       alert(message.data);
//     });
//   }, []);
//   return (
//     <>
//       <br />
//       <br />
//       <br />
//       <button onClick={handleVersion}>버전정보</button>
//       <button onClick={handlePlatform}>기종정보</button>
//       <button onClick={handleLocation}>위치정보</button>
//     </>
//   );
// }

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // 06. Bridge App To Web
// import { useEffect } from 'react';

// export default function App() {
//   useEffect(() => {
//     // 1. 안드로이드에서 수신 대기
//     document.addEventListener('message', (message: any) => {
//       alert(message.data);
//     });
//     // 2. IOS에서 수신 대기
//     window.addEventListener('message', (message: any) => {
//       alert(message.data);
//     });
//   }, []);
//   return <></>;
// }

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // 05. Bridge Web To App
// declare const window: Window & {
//   ReactNativeWebView: {
//     postMessage: (message: string) => void;
//   };
// };

// export default function App() {
//   const handleClick = () => {
//     // 웹뷰 안에서 실행될때 웹뷰쪽에서 추가해주는 프로퍼티
//     window.ReactNativeWebView.postMessage('kyoung2');
//   };

//   return (
//     <>
//       <br />
//       <br />
//       <button onClick={handleClick}>네이티브에 에게 데이터 전송하는 버튼</button>
//     </>
//   );
// }

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // 04. Debugging
// export default function App() {
//   const handleClick = () => {
//     console.log('디버깅용) 웹뷰에서 누른 버튼');
//   };
//   return (
//     <>
//       <br />
//       <br />
//       <button onClick={handleClick}>웹뷰 버튼</button>
//     </>
//   );
// }
