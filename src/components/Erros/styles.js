import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const styles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    icon: {
      color: colors.primary,
    },
    view: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
export default styles;
