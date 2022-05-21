import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, StatusBar, ScrollView, Text} from 'react-native';
import colors from '../../Data/colors';
import Optionitem from './OptionItem';
import options from '../../Data/options';
import search from '../../Api/youtube';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Upgarde from './Upgarde';
import {AuthContext} from '../Auth/Auth';
import {getData} from '../../Api/Storage';
import Heading from '../../Components/Heading';

const Options = ({navigation, route}) => {
  const searchHandler = async query => {
    const videoList = await search(query);
    navigation.navigate('Vidoes', {videoList, title: query});
  };
  const {user} = useContext(AuthContext);
  const [premium, setPremium] = useState(false);
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    if (route.params) setPremium(route.params.premium);
  }, [route]);
  useEffect(() => {
    const checkPremium = async () => {
      const res = await getData(user.uid);
      setPremium(res);
    };
    checkPremium();
  }, []);
  useEffect(() => {
    const email = user.email;
    setUserName(email.slice(0, email.indexOf('@')));
  }, []);
  return (
    <>
      <StatusBar backgroundColor={colors.orange} barStyle="light-content" />
      {userName && (
        <Heading
          text={`Hello ${userName}!`}
          style={{
            marginBottom: -30,
          }}
          size={18}
        />
      )}
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingVertical: 25,
        }}>
        <ScrollView>
          {options.map((item, index) =>
            !premium && index > 3 ? (
              <Optionitem
                text="Upgrade to unlock"
                key={index}
                onPress={() => {}}
                bgColor="rgba(0,0,0,0.2)"
                color="rgba(0,0,0,0.7)"
              />
            ) : (
              <Optionitem
                text={item}
                key={index}
                onPress={async () => {
                  await searchHandler(item);
                }}
              />
            ),
          )}
          {!premium && (
            <Upgarde
              onPress={() => {
                navigation.navigate('Payment');
              }}
              setPremium={setPremium}
            />
          )}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default Options;
