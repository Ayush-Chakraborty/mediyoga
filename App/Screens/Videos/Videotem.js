import React from 'react';
import {View, Image, TouchableOpacity, Linking, Text} from 'react-native';

const VideoItem = ({url, img, title, desc}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Linking.openURL(url);
      }}
      style={{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: '3%',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.4)',
        marginTop: 10,
        paddingBottom: 10,
      }}>
      <Image
        source={{uri: img}}
        style={{
          height: 50,
          width: 50,
          marginRight: 20,
        }}
      />
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            color: 'black',
            marginBottom: 5,
            fontSize: 18,
            fontWeight: '500',
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: 'grey',
            flexWrap: 'wrap',
            flex: 1,
          }}>
          {desc}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VideoItem;
