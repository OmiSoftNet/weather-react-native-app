import React, {useEffect} from 'react';
import {StyleSheet, ActivityIndicator, ImageBackground, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {View, Text} from '../components/Themed';
import {RootTabScreenProps} from '../types';
import {selectLocation, selectPending, selectWeather} from '../redux/weather/weatherSelectors';
import {getWeatherByCityName} from '../redux/weather/weatherThunk';
import {weatherConditions} from '../constants/conditions';
import {useLocation} from '../hooks/useLocation';
import {getWeatherConditionBackground} from '../helpers/weather';
import Colors from '../constants/Colors';

interface TabOneScreenProps {
  navigation: RootTabScreenProps<'TabOne'>;
}

const TabOneScreen: React.FC<TabOneScreenProps> = ({navigation}) => {
  useLocation();
  const dispatch = useDispatch();
  const locationState = useSelector(selectLocation);
  const isLoaded = useSelector(selectPending);
  const weather = useSelector(selectWeather);
  const {main, temp, name} = weather;

  useEffect(() => {
    if (locationState) {
      dispatch(getWeatherByCityName(locationState));
    }
  }, [locationState]);

  const getBgImage = () => getWeatherConditionBackground(weather.main);

  const navigateToModal = () => navigation.navigate('Modal');

  return (
    <View style={styles.container}>
      <ImageBackground source={getBgImage()} resizeMode="cover" style={styles.image}>
        {isLoaded ? (
          <>
            <TouchableOpacity style={styles.headerContainer} activeOpacity={0.9} onPress={navigateToModal}>
              <Text style={styles.cityTitle}>{name}</Text>
            </TouchableOpacity>
            <View style={styles.bodyContainer}>
              <View style={styles.tempWrap}>
                <Text style={styles.tempText}>{Math.round(temp)}</Text>
                <Text style={styles.tempCel}>˚C</Text>
              </View>
              <Text style={styles.title}>{weatherConditions[main].title}</Text>
            </View>
            <View style={styles.bottomContainer}></View>
          </>
        ) : (
          <View style={styles.horizontal}>
            <ActivityIndicator size="large" color={Colors.theme.underlay} />
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  weatherContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  headerContainer: {
    top: 60,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    height: 39,
    width: 'auto',
    position: 'absolute',
  },
  cityTitle: {
    fontSize: 18,
    color: '#000',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontFamily: 'ibm-plex-mono',
  },
  tempWrap: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  tempText: {
    fontSize: 220,
    lineHeight: 225,
    color: '#000',
    fontFamily: 'ibm-plex-mono-medium',
  },
  tempCel: {
    fontSize: 36,
    marginBottom: 30,
    fontFamily: 'ibm-plex-mono',
  },
  bodyContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    backgroundColor: 'transparent',
  },
  bottomContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    bottom: 40,
    backgroundColor: 'transparent',
    position: 'absolute',
  },
  title: {
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#000',
    fontFamily: 'ibm-plex-mono-medium',
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'transparent',
  },
});

export default TabOneScreen;
