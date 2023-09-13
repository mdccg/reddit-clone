import { useTheme } from '@shopify/restyle';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Theme } from '../stylesheets/theme';
import Row from './Row';
import Text from './Text';
import AngleDownSolidIcon from './icons/AngleDownSolid';
import BarsSolidIcon from './icons/BarsSolid';
import { useState } from 'react';
import MagnifyingGlassSolidIcon from './icons/MagnifyingGlassSolid';
import Box from './Box';
import Mdccg from '../../assets/images/mdccg.png';

const Header = () => {
  const theme = useTheme<Theme>();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const openLeftDrawer = () => alert('A configurar menu lateral à esquerda');

  return (
    <Row
      backgroundColor="mainForeground"
      justifyContent="space-between"
      borderColor="mainBackground"
      borderBottomWidth={1}
      padding="s"
    >
      <Row>
        <TouchableOpacity
          style={{ marginRight: theme.spacing.m }}
          onPress={openLeftDrawer}
        >
          <BarsSolidIcon width={24} height={24} fill={theme.colors.iconPrimaryBackground} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.selectContainer, {
              backgroundColor: theme.colors.mainBackground,
              padding: theme.spacing.s,
            }
          ]}
        >
          <Text variant="bold" marginRight="s">Início</Text>
          <AngleDownSolidIcon width={12} height={12} fill={theme.colors.iconPrimaryBackground} />
        </TouchableOpacity>
      </Row>

      <Row>
        <TouchableOpacity>
          <MagnifyingGlassSolidIcon width={20} height={20} fill={theme.colors.iconPrimaryBackground} />
        </TouchableOpacity>
      
        <TouchableOpacity style={[
          styles.avatarContainer, {
            backgroundColor: theme.colors.mainBackground,
            marginLeft: theme.spacing.m,
          }
        ]}>
          <Image style={styles.avatar} source={Mdccg} />

          <Box style={styles.onlineSignContainer}>
            <Box style={[
              styles.onlineSign, {
                backgroundColor: theme.colors.onlinePrimaryBackground,
                borderColor: theme.colors.mainForeground,
              }
            ]} />
          </Box>
        </TouchableOpacity>
        {/* pôr foto de perfil bonitinha aqui */}
      </Row>
    </Row>
  );
}

const avatarSize = 32;

const styles = StyleSheet.create({
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
  },

  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: avatarSize * 1.25,
    height: avatarSize * 1.25,
    borderRadius: avatarSize * 1.25,
  },

  avatar: {
    width: avatarSize,
    height: avatarSize,
  },

  onlineSignContainer: {
    position: 'relative',
  },
  
  onlineSign: {
    width: avatarSize * .375,
    height: avatarSize * .375,
    borderRadius: avatarSize * .375,

    borderWidth: 1,

    position: 'absolute',
    left: 8,
    top: -4,
  },
});

export default Header;