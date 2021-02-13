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
      fontFamily: fonts.medium,
      textAlign: 'justify',
    },
    titleStyle: {
      fontFamily: fonts.medium,
    },
  });
};
export default styles;
