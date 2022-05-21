import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../Data/colors';

const Heading = ({text, style, size}) => {
  return (
    <View style={[styles.header, style]}>
      <Text
        style={[
          styles.text,
          size && {
            fontSize: size,
          },
        ]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    color: colors.orange,
    marginBottom: 20,
  },
});

export default Heading;
