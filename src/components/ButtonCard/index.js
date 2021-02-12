import PropTypes from 'prop-types';
import * as React from 'react';
import {Card, Subheading} from 'react-native-paper';
import styles from './styles';

const ButtonCard = ({title}) => (
  <Card style={styles.card}>
    <Card.Content style={styles.content}>
      <Subheading>{title}</Subheading>
    </Card.Content>
  </Card>
);

ButtonCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ButtonCard;
