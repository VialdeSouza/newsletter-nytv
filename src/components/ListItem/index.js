import * as React from 'react';
import {Image} from 'react-native';
import {List} from 'react-native-paper';
import styles from './styles';

const ListItem = () => (
  <List.Item
    title="Pazuello nega no Senado ter recebido relatos sobre falta de oxigênio no AM"
    description="Ministro disse que soube de problema em rede de distribuição; senador rebateu."
    titleNumberOfLines={2}
    descriptionNumberOfLines={1}
    style={styles.item}
    right={() => (
      <Image
        source={{
          uri: 'https://tpc.googlesyndication.com/simgad/6843278809831425379?',
        }}
        style={{width: 100, borderRadius: 10}}
      />
    )}
  />
);

export default ListItem;
