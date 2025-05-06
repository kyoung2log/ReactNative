const useApis = (webviewRef) => {
  const onResponse = (result) => {
    webviewRef.current?.postMessage(JSON.stringify(result));
  };

  const onRequest = (query: string) => {
    switch (query) {
      case 'fetchDeviceVersion': {
        onResponse({ fetchDeviceVersion: { appVersion: '1.0' } });
        break;
      }

      case 'fetchDevicePlatform': {
        onResponse({ fetchDevicePlatform: { platform: 'iPhone' } });
        break;
      }

      case 'fetchDeviceLocation': {
        onResponse({ fetchDeviceLocation: { lat: 26, lng: 128 } });
        break;
      }
    }
  };

  return {
    onResponse,
    onRequest,
  };
};

export default useApis;
