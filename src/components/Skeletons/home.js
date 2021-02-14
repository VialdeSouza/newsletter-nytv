import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonHome = () => {
  return (
    <SkeletonPlaceholder>
      <View style={{height: 200}} />
      <View style={{height: 100, marginHorizontal: 10, marginTop: 5}} />
      <View style={{height: 25, marginHorizontal: 10, marginTop: 10}} />
      <View style={{height: 50, marginHorizontal: 10, marginTop: 5}} />
      <View style={{height: 25, marginHorizontal: 10, marginTop: 10}} />
      <View style={{height: 50, marginHorizontal: 10, marginTop: 5}} />
    </SkeletonPlaceholder>
  );
};

export default SkeletonHome;
