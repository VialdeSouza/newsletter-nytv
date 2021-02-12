import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import ButtonCard from '../components/ButtonCard';
import ListItem from '../components/ListItem';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
