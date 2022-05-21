import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../Data/colors';
const Upgarde = ({onPress}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        marginTop: 25,
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1.5,
          borderColor: colors.orange,
          flex: 0,
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderRadius: 5,
          backgroundColor: colors.orange,
        }}
        onPress={onPress}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            marginRight: 10,
            fontWeight: '500',
          }}>
          Upgrade
        </Text>
        <Icon name="chevron-triple-up" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Upgarde;
