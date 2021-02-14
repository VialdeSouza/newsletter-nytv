import PropTypes from 'prop-types';
import * as React from 'react';
import {List} from 'react-native-paper';
import useStyles from './styles';

const ListItem = ({onPress, title, description}) => {
  const styles = useStyles();

  return (
    <List.Item
      onPress={onPress}
      title={title}
      description={description}
      titleNumberOfLines={2}
      descriptionNumberOfLines={3}
      descriptionStyle={styles.descriptionStyle}
      titleStyle={styles.titleStyle}
      style={styles.item}
    />
  );
};

ListItem.propTypes = {
  description: PropTypes.string.isRequired,
  onPress: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ListItem;
