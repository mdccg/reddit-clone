import { useTheme } from '@shopify/restyle';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import { postsMock } from '../mock';
import { Theme } from '../stylesheets/theme';
import PostType from '../types/PostType';

const Feed = () => {
  const theme = useTheme<Theme>();
  const [subscribedSubreddits] = useState<string[]>(['Minecraft', 'cellbits']);
  const [posts] = useState<PostType[]>(postsMock);

  return (
    <>
      <Header />
      
      <ScrollView 
        style={{ backgroundColor: theme.colors.mainForeground }}
        contentContainerStyle={{ paddingBottom: theme.spacing.m }}
      >
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

export default Feed;