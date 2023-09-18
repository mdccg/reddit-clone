import { useTheme } from '@shopify/restyle';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import UserMdccg from '../../assets/images/u-mdccg.png';
import { Theme } from '../stylesheets/theme';
import Box from './Box';

interface AvatarOMineProps {
  size?: number;
  onPress: () => void;
}

const AvatarOMine: React.FC<AvatarOMineProps> = ({ size = 32, onPress }) => {
  const theme = useTheme<Theme>();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.avatarContainer, {
        backgroundColor: theme.colors.mainBackground,
        marginLeft: theme.spacing.m,
        width: size * 1.25,
        height: size * 1.25,
        borderRadius: size * 1.25,
      }
    ]}>
      <Image style={{ width: size, height: size }} source={UserMdccg} />

      <Box style={styles.onlineSignContainer}>
        <Box style={[
          styles.onlineSign, {
            backgroundColor: theme.colors.onlinePrimaryBackground,
            borderColor: theme.colors.mainForeground,
            width: size * .375,
            height: size * .375,
            borderRadius: size * .375,
          }
        ]} />
      </Box>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  onlineSignContainer: {
    position: 'relative',
  },
  
  onlineSign: {
    borderWidth: 1,

    position: 'absolute',
    left: 8,
    top: -4,
  },
});

export default AvatarOMine;