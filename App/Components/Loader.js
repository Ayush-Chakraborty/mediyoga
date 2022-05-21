import React, {useEffect} from 'react';
import {Animated} from 'react-native';
import {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../Data/colors';

const Loader = ({color}) => {
  const rotation = useState(new Animated.Value(0))[0];
  const rotationAnimation = () => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 360,
        duration: 500,
        useNativeDriver: true,
      }),
    ).start();
  };
  const interpolateRotation = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });
  useEffect(() => {
    rotationAnimation();
  }, []);
  return (
    <Animated.View
      style={{
        transform: [
          {
            rotateZ: interpolateRotation,
          },
        ],
      }}>
      <AntDesign name="loading1" size={24} color={color ?? colors.orange} />
    </Animated.View>
  );
};

export default Loader;
