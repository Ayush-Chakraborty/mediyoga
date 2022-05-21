import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import colors from '../../Data/colors';
import Loader from '../../Components/Loader';

const Optionitem = ({text, onPress, bgColor, color}) => {
  const [loading, setLoading] = useState(false);
  const clickHandler = async () => {
    setLoading(true);
    await onPress();
    setLoading(false);
  };
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor ?? colors.lightOrange,
        width: '85%',
        height: 50,
        borderRadius: 30,
        alignSelf: 'center',
        borderWidth: 1.5,
        borderColor: color ?? colors.orange,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        flexDirection: 'row',
      }}
      activeOpacity={1}
      onPress={clickHandler}>
      <Text>{loading && <Loader />}</Text>
      <Text
        style={{
          color: color ?? colors.orange,
          fontSize: 16,
          marginLeft: 10,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Optionitem;
