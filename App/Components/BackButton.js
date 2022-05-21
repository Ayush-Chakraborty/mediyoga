import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../Data/colors';

const BackButton = ({onPress, isApp}) => {
  return (
    <View
      style={{
        backgroundColor: isApp ? colors.orange : 'white',
      }}>
      <Icon.Button
        name="arrow-back"
        color={isApp ? 'white' : colors.orange}
        size={25}
        onPress={onPress}
        backgroundColor={isApp ? colors.orange : 'white'}
      />
    </View>
  );
};

export default BackButton;
