import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Text, View} from './Themed';
import Colors from '../constants/Colors';

interface EditScreenProps {
  city: string | null;
  onPress?: () => void;
}

const EditScreenInfo: React.FC<EditScreenProps> = ({city, onPress}) => {
  return (
    <View style={styles.container}>
      <ListItem
        underlayColor={Colors.theme.underlay}
        Component={TouchableHighlight}
        containerStyle={styles.listContainer}
        onPress={onPress}
        pad={20}>
        <ListItem.Content>
          <ListItem.Title>
            <Text style={styles.text}>{city}</Text>
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'ibm-plex-mono',
  },
  listContainer: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
});

export default EditScreenInfo;
