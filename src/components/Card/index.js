import PropTypes from 'prop-types';
import * as React from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useStyles from './styles';

const MainCard = ({title, description, url}) => {
  const styles = useStyles();

  return (
    <Card style={styles.item}>
      <Card.Cover source={{uri: url}} />
      <Card.Content style={styles.content}>
        <Title style={styles.titleStyle} numberOfLines={2}>
          {title}
        </Title>
        <Paragraph style={styles.descriptionStyle} numberOfLines={3}>
          {description}
        </Paragraph>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <Icon name="arrow-right-alt" size={25} style={{color: '#FFFF'}} />
      </Card.Actions>
    </Card>
  );
};

MainCard.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default MainCard;
