import { useTheme } from '@shopify/restyle';
import { useContext, useState } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { UserContext } from '../context/UserContext';
import { Theme } from '../stylesheets/theme';
import Box from './Box';
import DropdownOption from './DropdownOption';
import Row from './Row';
import Text from './Text';
import AngleDownSolidIcon from './icons/AngleDownSolid';
import BarsSolidIcon from './icons/BarsSolid';
import FireSolidIcon from './icons/FireSolid';
import HouseSolidIcon from './icons/HouseSolid';
import MagnifyingGlassSolidIcon from './icons/MagnifyingGlassSolid';
import SparkleSolidIcon from './icons/SparkleSolid';
import TvSolidIcon from './icons/TvSolid';
import AvatarOMine from './AvatarOMine';

const duration = 250;
const fadeIn = { from: { opacity: 0 }, to: { opacity: .625 }};
const fadeOut = { from: { opacity: .625 }, to: { opacity: 0 }};
const dropdownOptions = [
  { icon: HouseSolidIcon,   screenName: 'Início' },
  { icon: FireSolidIcon,    screenName: 'Popular' },
  { icon: TvSolidIcon,      screenName: 'Assista' },
  { icon: SparkleSolidIcon, screenName: 'Mais Recentes' },
];

const Header = () => {
  const theme = useTheme<Theme>();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { selectedHomeScreen, setSelectedHomeScreen } = useContext(UserContext);
  const [isDropdownCollapsing, setIsDropdownCollapsing] = useState<boolean>(false);

  const openLeftDrawer = () => alert('A configurar menu lateral à esquerda.');
  const openRightDrawer = () => alert('A configurar menu lateral à direita.');

  const selectOption = (value: any) => {
    setSelectedHomeScreen(value);
    collapseDropdown();
  }

  const collapseDropdown = () => {
    setIsDropdownCollapsing(true);

    setTimeout(() => {
      setIsDropdownCollapsing(false);
      setIsDropdownOpen(false);
    }, duration);
  }

  return (
    <>
      <Box height={56} />

      <Box style={styles.header}>
        <Row
          backgroundColor="mainForeground"
          justifyContent="space-between"
          borderColor="mainBackground"
          borderBottomWidth={1}
          padding="s"
          paddingLeft="m"
          elevation={3}
          zIndex={3}
          height={56}
        >
          <Row>
            <TouchableOpacity
              style={{ paddingRight: theme.spacing.m }}
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
              onPress={() => isDropdownOpen ? collapseDropdown() : setIsDropdownOpen(true)}
            >
              <Text variant="bold" marginRight="s">{selectedHomeScreen}</Text>
              <AngleDownSolidIcon width={12} height={12} fill={theme.colors.iconPrimaryBackground} transform={(isDropdownOpen && !isDropdownCollapsing) ? [{ rotate: '180deg' }] : undefined} />
            </TouchableOpacity>
          </Row>

          <Row>
            <TouchableOpacity>
              <MagnifyingGlassSolidIcon width={20} height={20} fill={theme.colors.iconPrimaryBackground} />
            </TouchableOpacity>
          
            <AvatarOMine onPress={openRightDrawer} />
          </Row>
        </Row>

        {isDropdownOpen && (
          <Animatable.View style={[
            styles.dropdown, {
              backgroundColor: theme.colors.mainForeground,
              borderColor: theme.colors.mainBackground,
              padding: theme.spacing.m,
            }
          ]}
            animation={isDropdownCollapsing ? 'fadeOutUp' : 'fadeInDown'}
            duration={duration}
          >
            {dropdownOptions.map((dropdownOption, index, array) => {
              const isLastOne = array.length - 1 === index;
            
              return (
                <DropdownOption
                  key={dropdownOption.screenName}
                  selectOption={selectOption}
                  {...dropdownOption}
                  style={isLastOne ? { marginBottom: 0 } : {}}
                  />
              );
            })}
          </Animatable.View>
        )}

        {isDropdownOpen && (
          <Animatable.View
            animation={isDropdownCollapsing ? fadeOut : fadeIn}
            duration={duration}
            style={styles.wrapper}
          >
            <Pressable style={{ flex: 1 }} onPress={collapseDropdown} />
          </Animatable.View>
        )}
      </Box>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    width: '100%',
  },

  dropdown: {
    borderBottomWidth: 1,
    elevation: 2,
    zIndex: 2,
  },

  wrapper: {
    backgroundColor: 'black',
    opacity: .625,
    position: 'absolute',
    width: '100%',
    height: Dimensions.get('screen').height,
    elevation: 1,
    zIndex: 1,
  },

  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
  },
});

export default Header;