import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import colors from '../Data/colors';
import Loader from './Loader';

const Button = ({text, containerStyle, onPress, isEnabled, loading}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (isEnabled) onPress();
      }}
      activeOpacity={1}
      style={[
        {
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: isEnabled ? colors.orange : colors.mediumOrange,
          marginVertical: 15,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        },
        containerStyle,
      ]}>
      {loading && (
        <Text style={{marginRight: 15}}>
          <Loader color="white" />
        </Text>
      )}
      <Text
        style={{
          color: 'white',
          fontWeight: '500',
          fontSize: 18,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Button;
