import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const styles = () => {
  const {fonts, colors} = useTheme();

  return StyleSheet.create({
    item: {
      justifyContent: 'center',
      elevation: 0,
      backgroundColor: colors.primary,
    },
    description: {
      fontFamily: fonts.regular,
      color: colors.backdrop,
      textAlign: 'justify',
    },
    title: {
      fontFamily: fonts.medium,
      color: colors.accent,
    },
    actions: {
      justifyContent: 'flex-end',
    },
  });
};
export default styles;
