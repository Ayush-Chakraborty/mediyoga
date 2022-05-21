import auth from '@react-native-firebase/auth';
import {addData, getData} from './Storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const signin = async (email, password) => {
  try {
    const res = await auth().signInWithEmailAndPassword(email, password);
    // await getData(res.user.uid);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const resetPassword = async email => {
  try {
    await auth().sendPasswordResetEmail(email);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const signup = async (email, password) => {
  try {
    const res = await auth().createUserWithEmailAndPassword(email, password);
    await addData(res.user.uid);
    return true;
  } catch (err) {
    console.log('Signup: ', err);
    return false;
  }
};

export const signout = async () => {
  try {
    await auth().signOut();
    await AsyncStorage.removeItem('premium');
  } catch (err) {
    console.log(err);
  }
};
