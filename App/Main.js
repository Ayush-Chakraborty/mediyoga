import React, {useContext, useState, useEffect} from 'react';
import AuthNavigation from './Routes/AuthNavigation';
import AppNavigation from './Routes/AppNavigation';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './Screens/Auth/Auth';
import {getData} from './Api/Storage';
import RNBootSplash from 'react-native-bootsplash';

const Main = () => {
  const {user, setUser, signout} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  async function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    RNBootSplash.hide(); // fade
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;
  return user ? <AppNavigation /> : <AuthNavigation />;
};

export default Main;
