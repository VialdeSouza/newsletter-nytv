import * as React from 'react';
import {List} from 'react-native-paper';
import useStyles from './styles';

const ListItem = () => {
  const styles = useStyles();

  return (
    <List.Item
      title="Pazuello nega no Senado ter recebido relatos sobre falta de oxigênio no AM"
      description="Ministro disse que soube de problema em rede de distribuição; senador rebateu."
      titleNumberOfLines={2}
      descriptionNumberOfLines={3}
      descriptionStyle={styles.descriptionStyle}
      titleStyle={styles.titleStyle}
      style={styles.item}
    />
  );
};

export default ListItem;
