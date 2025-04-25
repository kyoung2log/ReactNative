import { useRef } from 'react';
import { WebView } from 'react-native-webview';

const 스카 = '192.168.0.25';

const BridgePromiseAPIPage = () => {
  const webviewRef = useRef<WebView>(null);
  return (
    <WebView
      source={{ uri: `http://${스카}:5173` }}
      ref={webviewRef}
      webviewDebuggingEnabled={true}
      onMessage={(event) => {
        if (!event.nativeEvent.data) return;

        const request = JSON.parse(event.nativeEvent.data);

        switch (request.query) {
          case 'fetchDeviceVersion': {
            webviewRef.current?.postMessage(
              JSON.stringify({
                fetchDeviceVersion: {
                  appVersion: '1.0',
                },
              })
            );

            break;
          }

          case 'fetchDevicePlatform': {
            webviewRef.current?.postMessage(
              JSON.stringify({
                fetchDevicePlatform: {
                  platform: 'iPhone',
                },
              })
            );

            break;
          }

          case 'fetchDeviceLocation': {
            webviewRef.current?.postMessage(
              JSON.stringify({
                fetchDeviceLocation: {
                  lat: 26,
                  lng: 128,
                },
              })
            );

            break;
          }
        }
      }}
    />
  );
};

export default BridgePromiseAPIPage;
