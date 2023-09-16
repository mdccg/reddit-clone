import { ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Text from '../components/Text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../stylesheets/theme';

const Feed = () => {
  const theme = useTheme<Theme>();

  return (
    <>
      <Header />
      
      <ScrollView style={[styles.feed, { backgroundColor: theme.colors.mainForeground }]}>
        <Text>Primeiro texto</Text>
        {Array(100).fill({}).map((_, index) => <Text key={index}>Isopor</Text>)}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  feed: {},
});

export default Feed;