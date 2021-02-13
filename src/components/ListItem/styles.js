import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const styles = () => {
  const {fonts} = useTheme();

  return StyleSheet.create({
    item: {
      margin: 5,
      minHeight: 100,
      justifyContent: 'center',
    },
    descriptionStyle: {
      ...fonts.regular,
      textAlign: 'justify',
    },
    titleStyle: {
      ...fonts.medium,
    },
  });
};
export default styles;
