import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AnimatedSplash from 'react-native-animated-splash-screen';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {Icon} from 'react-native-elements';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Colors from './constants/Colors';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const splashIcon = <Icon size={150} name="weather-partly-cloudy" type="material-community" />;

  return (
    <AnimatedSplash
      translucent
      isLoaded={isLoadingComplete}
      customComponent={splashIcon}
      backgroundColor={Colors.theme.underlay}>
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </Provider>
      </SafeAreaProvider>
    </AnimatedSplash>
  );
}
