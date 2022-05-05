import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackScreenProps} from '../types';

interface NotFoundScreenProps {
  navigation: RootStackScreenProps<'NotFound'>;
}

const NotFoundScreen: React.FC<NotFoundScreenProps> = ({navigation}) => {
  const navigateToRoot = () => navigation.replace('Root');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Well well well, how did you find your way here? You're not supposed to be here!</Text>
      <TouchableOpacity onPress={navigateToRoot} style={styles.link}>
        <Text style={styles.linkText}>Be gone Witch!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

export default NotFoundScreen;
