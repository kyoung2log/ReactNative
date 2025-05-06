import { useRef } from 'react';
import { WebView } from 'react-native-webview';
import useApis from './apis';

const 스카 = '192.168.0.25';
const 집 = '192.168.219.120';

const BridgePromiseAPIRefactorPage = () => {
  const webviewRef = useRef<WebView>(null);
  const { onRequest } = useApis(webviewRef);
  return (
    <WebView
      source={{ uri: `http://${집}:5173` }}
      ref={webviewRef}
      webviewDebuggingEnabled={true}
      onMessage={(event) => {
        if (!event.nativeEvent.data) return;

        const request = JSON.parse(event.nativeEvent.data);
        onRequest(request.query);
      }}
    />
  );
};

export default BridgePromiseAPIRefactorPage;
