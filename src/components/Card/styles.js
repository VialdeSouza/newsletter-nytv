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
    descriptionStyle: {
      ...fonts.regular,
      textAlign: 'justify',
      color: colors.backdrop,
    },
    titleStyle: {
      ...fonts.medium,
      color: colors.accent,
      lineHeight: 25,
    },
    actions: {
      justifyContent: 'flex-end',
    },
    content: {
      marginTop: 5,
    },
  });
};
export default styles;
