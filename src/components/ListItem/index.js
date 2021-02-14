import PropTypes from 'prop-types';
import * as React from 'react';
import {Caption, List} from 'react-native-paper';
import useStyles from './styles';

const ListItem = ({onPress, title, description, byline}) => {
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
      right={() => <Caption style={styles.author}>{byline}</Caption>}
    />
  );
};

ListItem.propTypes = {
  description: PropTypes.string.isRequired,
  onPress: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  byline: PropTypes.string.isRequired,
};

export default ListItem;
