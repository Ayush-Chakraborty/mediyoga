import React, {useContext, useState} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Input from '../../Components/Input';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../Data/colors';
import Button from '../../Components/Button';
import TextLink from '../../Components/TextLink';
import Heading from '../../Components/Heading';
import {AuthContext} from './Auth';
import Invalid from '../../Components/Invalid';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [passward, setPassword] = useState('');
  const [confirmPassward, setConfirmPassword] = useState('');
  const {signup} = useContext(AuthContext);
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);

  const signupHandler = async () => {
    setLoading(true);
    const res = await signup(email, passward);
    if (!res) {
      setInvalid(true);
      setLoading(false);
      return;
    }
  };
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <Heading text="Create New Account" />
        <Input
          text="Email Id"
          icon={<Icon name="user-alt" size={20} color="#4f4f4f" />}
          onChange={text => {
            setEmail(text);
            setInvalid(false);
          }}
        />
        <Input
          text="Password"
          icon={<Icon name="key" size={20} color="#4f4f4f" />}
          onChange={text => {
            setPassword(text);
            setInvalid(false);
          }}
          secure={true}
        />
        <Input
          text="Confirm Password"
          icon={<Icon name="key" size={20} color="#4f4f4f" />}
          onChange={text => {
            setConfirmPassword(text);
            setInvalid(false);
          }}
        />
        {invalid && <Invalid text="Invalid email or password is too short" />}
        <Button
          text="Sign Up"
          containerStyle={{
            width: '85%',
          }}
          onPress={signupHandler}
          isEnabled={
            email.length && passward.length && passward === confirmPassward
          }
          loading={loading}
        />
        <TextLink
          onPress={() => {
            navigation.navigate('Login');
          }}
          text="Have an account? Login"
          textStyle={styles.createAcc}
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
  image: {
    height: 150,
    width: (587 / 581) * 150,
    marginVertical: 25,
  },
  forgotPass: {
    color: colors.orange,
    alignSelf: 'flex-end',
    marginRight: '7.5%',
    fontWeight: '500',
    marginTop: -10,
  },
  createAcc: {
    color: colors.orange,
    fontWeight: '500',
    fontSize: 18,
    textDecorationStyle: 'solid',
    textDecorationColor: colors.orange,
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },
});

export default Signup;
