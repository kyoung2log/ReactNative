import { Stack } from 'expo-router'; // 페이지 이동
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

export default function RootLayout() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <></>;

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
    </Stack>
  );
}
