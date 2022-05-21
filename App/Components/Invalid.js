import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Invalid = ({text}) => {
  return (
    <View
      style={{
        width: '85%',
        marginTop: -10,
        marginBottom: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
      }}>
      <Icon name="exclamation-triangle" size={13} color="red" />
      <Text
        style={{
          color: 'red',
          fontWeight: '500',
          marginLeft: 10,
        }}>
        {text}
      </Text>
    </View>
  );
};

export default Invalid;
