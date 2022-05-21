import React, {useContext, useState} from 'react';
import {View, StatusBar, Text} from 'react-native';
import colors from '../../Data/colors';
import RadioGroup from 'react-native-radio-buttons-group';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from '../../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {updateData} from '../../Api/Storage';
import {AuthContext} from '../Auth/Auth';

const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: (
      <Text>
        <FontAwesome name="bank" color="black" size={24} />
        {'   '}Bank Transfer
      </Text>
    ),
    value: 'option1',
    labelStyle: {
      color: 'black',
      fontSize: 20,
    },
    size: 20,
  },
  {
    id: '2',
    label: (
      <Text>
        <FontAwesome name="credit-card" color="black" size={24} />
        {'   '}Credit / Debit Card
      </Text>
    ),
    value: 'option2',
    labelStyle: {
      color: 'black',
      fontSize: 20,
    },
    size: 20,
  },
  {
    id: '3',
    label: (
      <Text>
        <Entypo name="paypal" color="black" size={24} />
        {'   '}Paypal
      </Text>
    ),
    value: 'option2',
    labelStyle: {
      color: 'black',
      fontSize: 20,
    },
    size: 20,
  },
];
const Payment = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(
    radioButtons[0].selected ||
      radioButtons[1].selected ||
      radioButtons[2].selected,
  );
  function onPressRadioButton(radioButtonsArray) {
    setSelected(true);
    setRadioButtons(radioButtonsArray);
  }

  return (
    <>
      <StatusBar backgroundColor={colors.orange} barStyle="light-content" />
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingVertical: 25,
        }}>
        <Text
          style={{
            color: colors.orange,
            fontSize: 18,
            marginLeft: 25,
            textDecorationColor: colors.orange,
            textDecorationLine: 'underline',
            fontWeight: '500',
          }}>
          Choose Payment Option
        </Text>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          containerStyle={{
            alignItems: 'flex-start',
            marginVertical: 15,
            marginLeft: 25,
          }}
        />
        <Button
          text="Pay $19"
          containerStyle={{width: 150, alignSelf: 'center'}}
          isEnabled={selected}
          onPress={() => {
            const func = async () => {
              setLoading(true);
              await AsyncStorage.setItem('premium', 'true');
              await updateData(user.uid);
              setLoading(false);
              navigation.navigate('Options', {premium: true});
            };
            func();
          }}
          loading={loading}
        />
      </View>
    </>
  );
};

export default Payment;
