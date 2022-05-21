import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async id => {
  try {
    const res = await database().ref(`/users/${id}`).once('value');
    if (res.toJSON()) await AsyncStorage.setItem('premium', 'true');
    else await AsyncStorage.setItem('premium', 'false');
    return res.toJSON();
  } catch (err) {
    console.log(err);
    return false;
  }
};

const addData = async id => {
  try {
    await database().ref(`/users/${id}`).set(false);
    await AsyncStorage.setItem('premium', 'false');
  } catch (err) {
    console.log(err);
  }
};

const updateData = async id => {
  const data = {};
  data[id] = true;
  try {
    await database().ref('/users').update(data);
  } catch (err) {
    console.log(err);
  }
};

export {addData, getData, updateData};
