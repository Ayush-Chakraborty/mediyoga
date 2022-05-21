import React from 'react';
import {View, TextInput} from 'react-native';

const Input = ({text, icon, onChange, onSubmit, secure}) => {
  return (
    <View
      style={{
        borderColor: '#c0c0c0',
        borderWidth: 1.5,
        flexDirection: 'row',
        height: 50,
        width: '85%',
        borderRadius: 7,
        backgroundColor: '#f5f5f5',
        marginBottom: 20,
      }}>
      {icon && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            marginLeft: 10,
          }}>
          {icon}
        </View>
      )}
      <TextInput
        placeholder={text}
        style={{
          color: '#4f4f4f',
          paddingHorizontal: 15,
          flex: 1,
          fontSize: 18,
        }}
        placeholderTextColor="#787878"
        selectionColor="#4f4f4f"
        onChangeText={text => onChange(text)}
        onSubmitEditing={onSubmit}
        secureTextEntry={secure ?? false}
      />
    </View>
  );
};

export default Input;
