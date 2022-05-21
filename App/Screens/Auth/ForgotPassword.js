import React, {useContext, useState} from 'react';
import {View, StyleSheet, StatusBar, Text} from 'react-native';
import Input from '../../Components/Input';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from '../../Components/Button';
import Heading from '../../Components/Heading';
import {AuthContext} from './Auth';
import Invalid from '../../Components/Invalid';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ForgotPassward = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [invalid, setInvalid] = useState(false);
  const {resetPassword} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [passwordReset, setPasswordReset] = useState(false);

  const resetPasswordHandler = async () => {
    setLoading(true);
    const res = await resetPassword(email);
    setLoading(false);
    if (res) {
      setPasswordReset(true);
      return;
    }
    setInvalid(true);
  };
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <Heading text="Reset Password" />
        <Input
          text="Email Id"
          icon={<Icon name="user-alt" size={20} color="#4f4f4f" />}
          onChange={text => {
            setEmail(text);
            setInvalid(false);
          }}
        />
        {invalid && <Invalid text="Email not found" />}
        {passwordReset && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>
              <AntDesign name="checkcircle" size={16} color="green" />
            </Text>
            <Text style={{color: 'green', fontWeight: '500'}}>
              {'  '}Password reset link is sent to your mail
            </Text>
          </View>
        )}
        <Button
          text="Reset Password"
          containerStyle={{
            width: '85%',
          }}
          onPress={passwordReset ? () => {} : resetPasswordHandler}
          isEnabled={email.length}
          loading={loading}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default ForgotPassward;
