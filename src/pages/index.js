import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import Card from '../components/Card';
import ListItem from '../components/ListItem';
import keyNyTimes from '../../apiKey';
import SkeletonHome from '../components/Skeletons/home';

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
      const {data} = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/${nameRoute}.json?api-key=${keyNyTimes}`,
      );
      setNews(data.results);
      setstateApp('ready');
    } catch (error) {
      setstateApp('loading');
    }
  };

  useEffect(() => {
    feacthNews();
  }, []);

  if (stateApp === 'loading') {
    return <SkeletonHome />;
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
            key={item.title}
            title={item.title}
            description={item.abstract}
            byline={item.byline}
            onPress={() => readerNews(item.url)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
