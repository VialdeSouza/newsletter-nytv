import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import Card from '../components/Card';
import ListItem from '../components/ListItem';

const Home = () => {
  const nameRoute = useRoute().name;
  const navigation = useNavigation();
  const [news, setNews] = useState([]);
  const [stateApp, setstateApp] = useState('loading');

  const size = news.length;
  const randomIndex = Math.floor(Math.random() * size);
  const readerNews = (url) => {
    navigation.navigate('Reader', {url});
  };
  const feacthNews = async () => {
    try {
      setstateApp('loading');
      const key = process.env.KEY_NYTIMES;
      const {data} = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/${nameRoute}.json?api-key=${key}`,
      );
      setNews(data.results);
      setstateApp('ready');
    } catch (error) {
      setstateApp('error');
    }
  };

  useEffect(() => {
    feacthNews();
  }, []);

  if (stateApp === 'loading') {
    return <></>;
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Card
          url={news[randomIndex].multimedia[0].url}
          title={news[randomIndex].title}
          description={news[randomIndex].abstract}
          onPress={() => readerNews(news[randomIndex].url)}
        />

        {news.map((item) => (
          <ListItem
            title={item.title}
            description={item.abstract}
            onPress={() => readerNews(item.url)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
