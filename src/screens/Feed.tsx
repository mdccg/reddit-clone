import { ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Text from '../components/Text';

const Feed = () => {
  return (
    <>
      <Header />
      
      <ScrollView style={styles.feed}>
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