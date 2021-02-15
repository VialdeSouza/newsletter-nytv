import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Caption} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useStyles from './styles';

const Error = () => {
  const styles = useStyles();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.view}>
        <Icon name="mood-bad" size={60} style={styles.icon} />
        <Caption>Ocorreu um erro, tente novamente mais tarde.</Caption>
      </View>
    </SafeAreaView>
  );
};

export default Error;
