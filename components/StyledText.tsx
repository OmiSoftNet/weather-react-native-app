import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Text, TextProps} from './Themed';

export const MonoText: React.FC<TextProps> = props => <Text {...props} style={[props.style, styles.mono]} />;

const styles = StyleSheet.create({
  mono: {
    fontFamily: 'space-mono',
  },
});

export default styles;
