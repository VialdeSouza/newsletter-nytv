import React from 'react';
import {SafeAreaView, View} from 'react-native';
import ButtonCard from '../components/ButtonCard';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row'}}>
        <ButtonCard title="Tecnologia" />
        <ButtonCard title="Ciência" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
