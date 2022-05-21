import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';
import Input from '../../Components/Input';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../Data/colors';
import Button from '../../Components/Button';
import TextLink from '../../Components/TextLink';
import Heading from '../../Components/Heading';
import {AuthContext} from './Auth';
import Invalid from '../../Components/Invalid';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [passward, setPassword] = useState('');
  const [invalid, setInvalid] = useState(false);
  const {signin, user} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const loginHandler = async () => {
    setLoading(true);
    const res = await signin(email, passward);
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
        <Image
          source={require('../../../assets/Images/logo.png')}
          style={styles.image}
        />
        <Heading text="Welcome to Mediyoga!" />
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
            setInvalid(false);
            setPassword(text);
          }}
          onSubmit={loginHandler}
          secure={true}
        />
        {invalid && <Invalid text="Wrong email or password" />}
        <TextLink
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}
          text="Forgot Passward?"
          textStyle={styles.forgotPass}
          containerStyle={{
            alignSelf: 'flex-end',
          }}
        />
        <Button
          text="Login"
          containerStyle={{
            width: '85%',
          }}
          onPress={loginHandler}
          isEnabled={email.length && passward.length}
          loading={loading}
        />
        <TextLink
          onPress={() => {
            navigation.push('Signup');
          }}
          text="Create New Account"
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

export default Login;
