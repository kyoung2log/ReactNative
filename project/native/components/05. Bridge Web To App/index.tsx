import { WebView } from 'react-native-webview';

const 스카 = '192.168.0.25';

const BridgeWebToAppPage = () => {
  return (
    <>
      <WebView
        source={{ uri: `http://${스카}:5173` }}
        webviewDebuggingEnabled={true}
        onMessage={(event) => {
          if (!event.nativeEvent.data) return;

          console.log(`web에서 보내준 데이터 : ${event.nativeEvent.data}`);
        }}
      />
    </>
  );
};

export default BridgeWebToAppPage;
