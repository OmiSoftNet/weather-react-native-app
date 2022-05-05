import * as React from 'react';
import {StyleSheet, Text, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import EditScreenInfo from '../components/EditScreenInfo';
import {View} from '../components/Themed';
import {popularCity} from '../constants/popularCity';
import {selectLocation, selectWeather} from '../redux/weather/weatherSelectors';
import {getWeatherByCityName} from '../redux/weather/weatherThunk';
import {getWeatherConditionBackground} from '../helpers/weather';

export default function ModalScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const weather = useSelector(selectWeather);
  const currentLocation = useSelector(selectLocation);

  const onTabPress = (cityName: string) => {
    if (cityName !== popularCity.CURRENT) {
      getWeatherByUserChoice(cityName);
    } else {
      getWeatherByUserChoice(currentLocation);
    }
    navigation.navigate('Root', {screen: 'TabOne'});
  };

  const getWeatherByUserChoice = (cityName: string | null) => {
    if (cityName) {
      dispatch(getWeatherByCityName(cityName));
    }
  };

  const getBgImage = () => getWeatherConditionBackground(weather.main);

  return (
    <View style={styles.container}>
      <ImageBackground source={getBgImage()} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Choose a city</Text>
        <EditScreenInfo
          city={popularCity.CURRENT}
          onPress={() => {
            onTabPress(popularCity.CURRENT);
          }}
        />
        <EditScreenInfo
          city={popularCity.LONDON}
          onPress={() => {
            onTabPress(popularCity.LONDON);
          }}
        />
        <EditScreenInfo
          city={popularCity.TOKYO}
          onPress={() => {
            onTabPress(popularCity.TOKYO);
          }}
        />
        <EditScreenInfo
          city={popularCity.BERLIN}
          onPress={() => {
            onTabPress(popularCity.BERLIN);
          }}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 50,
    marginBottom: 32,
    fontSize: 24,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#000',
    fontFamily: 'ibm-plex-mono-bold',
  },
});
