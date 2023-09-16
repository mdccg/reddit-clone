import { useTheme } from '@shopify/restyle';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Theme } from '../stylesheets/theme';
import Text from './Text';

interface DropdownOptionProps {
  selectOption: (value: string) => void;
  icon: React.FC<SvgProps>;
  screenName: string;
  style?: StyleProp<ViewStyle>;
}

const DropdownOption: React.FC<DropdownOptionProps> = ({ selectOption, icon: Icon, screenName, style }) => {
  const theme = useTheme<Theme>();

  return (
    <TouchableOpacity onPress={() => selectOption(screenName)} style={[styles.optionContainer, { marginBottom: theme.spacing.l }, style]}>
      <Icon {...styles.iconStyles} fill={theme.colors.iconPrimaryBackground} />
      <Text variant="bold" marginLeft="m">{screenName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconStyles: {
    width:  24,
    height: 24,
    fill: 'red',
  },
});

export default DropdownOption;