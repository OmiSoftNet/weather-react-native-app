import {FontAwesome} from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useState, useEffect} from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          'ibm-plex-mono': require('../assets/fonts/IBMPlexMono-Regular.ttf'),
          'ibm-plex-mono-text': require('../assets/fonts/IBMPlexMono-Text.ttf'),
          'ibm-plex-mono-medium': require('../assets/fonts/IBMPlexMono-Medium.ttf'),
          'ibm-plex-mono-semibold': require('../assets/fonts/IBMPlexMono-SemiBold.ttf'),
          'ibm-plex-mono-bold': require('../assets/fonts/IBMPlexMono-Bold.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
