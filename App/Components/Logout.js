import React, {useContext} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../Data/colors';
import {AuthContext} from '../Screens/Auth/Auth';

const Logout = () => {
  const {signout} = useContext(AuthContext);
  return (
    <View
      style={{
        backgroundColor: colors.orange,
        transform: [
          {
            translateX: 15,
          },
        ],
      }}>
      <Icon.Button
        name="log-out"
        color="white"
        size={25}
        onPress={signout}
        backgroundColor={colors.orange}
      />
    </View>
  );
};

export default Logout;
