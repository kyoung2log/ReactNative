// 05. Bridge Web To App
declare const window: Window & {
  ReactNativeWebView: {
    postMessage: (message: string) => void;
  };
};

export default function App() {
  const handleClick = () => {
    // 웹뷰 안에서 실행될때 웹뷰쪽에서 추가해주는 프로퍼티
    window.ReactNativeWebView.postMessage('kyoung2');
  };

  return (
    <>
      <br />
      <br />
      <button onClick={handleClick}>네이티브에 에게 데이터 전송하는 버튼</button>
    </>
  );
}

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
