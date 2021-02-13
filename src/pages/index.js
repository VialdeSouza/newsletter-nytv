import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Card from '../components/Card';
import ListItem from '../components/ListItem';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Card />
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
