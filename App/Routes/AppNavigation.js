import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Options from '../Screens/Options/Options';
import Vidoes from '../Screens/Videos/Videos';
import colors from '../Data/colors';
import Logout from '../Components/Logout';
import BackButton from '../Components/BackButton';
import Payment from '../Screens/Options/Payment';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: 'white'},
        headerShadowVisible: false,
        animation: 'slide_from_bottom',
        headerTitleStyle: {
          color: 'white',
        },
        headerStyle: {
          backgroundColor: colors.orange,
        },
        headerTitleAlign: 'center',
        headerRight: Logout,
      }}
      initialRouteName="Options">
      <Stack.Screen
        name="Options"
        component={Options}
        options={{
          title: 'Choose Your Target',
        }}
      />
      <Stack.Screen
        name="Vidoes"
        component={Vidoes}
        options={({navigation, route}) => ({
          title: route.params.title,
          headerLeft: () => (
            <BackButton
              isApp={true}
              onPress={() => {
                navigation.navigate('Options');
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={({navigation}) => ({
          title: 'Upgarde to Premium',
          headerLeft: () => (
            <BackButton
              isApp={true}
              onPress={() => {
                navigation.navigate('Options', {premium: false});
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default AppNavigation;
