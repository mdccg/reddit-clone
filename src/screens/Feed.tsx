import { ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Text from '../components/Text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../stylesheets/theme';
import { useState } from 'react';
import PostType from '../types/PostType';

const Feed = () => {
  const theme = useTheme<Theme>();
  const [subscribedSubreddits] = useState<string[]>(['Minecraft', 'cellbits']);
  const [posts] = useState<PostType[]>([
    {
      subredditPicture: require('../../assets/images/r-minecraft.png'),
      subredditName: 'Minecraft',
      content: 'What is the best (and worst) looking armour trim?',
      image: require('../../assets/images/p-16k7lja.jpg'),
      votesCount: 312,
      commentsCount: 49,
      creationDate: new Date('2023-09-16T13:27:58-04:00')
    },
    {
      subredditPicture: require('../../assets/images/r-cellbits.png'),
      subredditName: 'cellbits',
      content: 'KKKKKKKKKKKKK',
      image: require('../../assets/images/p-16kgls3.jpg'),
      votesCount: 0,
      commentsCount: 1,
      creationDate: new Date('2023-09-16T20:03:18-04:00')
    },
    {
      isSponsored: true,
      subredditPicture: require('../../assets/images/r-jetbrains.jpeg'),
      subredditName: 'JetBrains_official',
      content: 'Investigating issues or reviewing code with a teammate using screen sharing is a nightmare. Code With Me allows you to invite others into your project and work on it together in real time. Try it in your JetBrains IDE and take your online collaboration game to the next level.',
      image: require('../../assets/images/sponsor-1.webp'),
      votesCount: 166,
      commentsCount: 0,
      website: 'jetbrains.com',
    },
  ]);

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