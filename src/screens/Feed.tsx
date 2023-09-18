import { useTheme } from '@shopify/restyle';
import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Text from '../components/Text';
import { postsMock } from '../mock';
import { Theme } from '../stylesheets/theme';
import PostType from '../types/PostType';
import PostCard from '../components/PostCard';

const Feed = () => {
  const theme = useTheme<Theme>();
  const [subscribedSubreddits] = useState<string[]>(['Minecraft', 'cellbits']);
  const [posts] = useState<PostType[]>(postsMock);

  return (
    <>
      <Header />
      
      <ScrollView style={[styles.feed, { backgroundColor: theme.colors.mainForeground }]}>
        {posts.map((post, index) => (
          <PostCard
            key={index}
            post={post}
            isUserSubscribed={subscribedSubreddits.includes(post.subredditName)} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  feed: {},
});

export default Feed;