import { useRef } from 'react';
import { Button } from 'react-native';
import { WebView } from 'react-native-webview';

const 스카 = '192.168.0.25';

const BridgeAppToWebPage = () => {
  const webviewRef = useRef<WebView>(null);
  const handlePress = () => {
    webviewRef.current?.postMessage('경이');
  };

  return (
    <>
      <WebView source={{ uri: `http://${스카}:5173` }} ref={webviewRef} webviewDebuggingEnabled={true} />
      <Button onPress={handlePress} title='웹에게 데이터 주는 네이티브 버튼' />
    </>
  );
};

export default BridgeAppToWebPage;
