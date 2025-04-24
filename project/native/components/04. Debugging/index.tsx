import { Button } from 'react-native';
import { WebView } from 'react-native-webview';

const 스카 = '192.168.0.25';

// 네이티브 디버깅은 네이티브 요소에서만 콘솔로 찍힘
// 웹뷰 내부의 버튼은 사파리 인스펙터로 읽어야 함
const DebuggingPage = () => {
  const handlePress = () => {
    console.log('디버깅 콘솔) 모바일에서 누른 버튼');
  };

  return (
    <>
      <WebView source={{ uri: `http://${스카}:5173` }} webviewDebuggingEnabled={true} />
      <Button onPress={handlePress} title='모바일버튼핑' />
    </>
  );
};

export default DebuggingPage;
