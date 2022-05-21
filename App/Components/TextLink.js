import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const TextLink = ({text, onPress, textStyle, containerStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={containerStyle}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default TextLink;
