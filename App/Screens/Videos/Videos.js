import React from 'react';
import {StatusBar, View, ScrollView} from 'react-native';
import colors from '../../Data/colors';
import VideoItem from './Videotem';

const Videos = props => {
  if (!props.route.params) return <></>;
  return (
    <>
      <StatusBar backgroundColor={colors.orange} barStyle="light-content" />
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <ScrollView>
          {props.route.params.videoList.map(({id, url, desc, img, title}) => (
            <VideoItem key={id} url={url} desc={desc} img={img} title={title} />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Videos;
