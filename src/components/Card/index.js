import * as React from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useStyles from './styles';

const MainCard = () => {
  const styles = useStyles();

  return (
    <Card style={styles.item}>
      <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
      <Card.Content>
        <Title style={styles.title} numberOfLines={2}>
          De onde vem o que eu como: café é a 2ª bebida mais consumida no país e
          interesse por métodos de preparo cresceu na pandemia
        </Title>
        <Paragraph style={styles.description} numberOfLines={3}>
          Barista campeã brasileira dá dicas de como fazer um café coado
          perfeito em casa. Veja também as diferenças entre os grãos especiais,
          gourmets e tradicionais. Produtores e exportadores têm bom momento com
          dólar alto, mas cenário ainda é desafiador para cafeterias.
        </Paragraph>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <Icon name="arrow-right-alt" size={25} style={{color: '#FFFF'}} />
      </Card.Actions>
    </Card>
  );
};

export default MainCard;
