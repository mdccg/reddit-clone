import { useTheme } from '@shopify/restyle';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import { postsMock } from '../mock';
import { Theme } from '../stylesheets/theme';
import PostType from '../types/PostType';
import Box from '../components/Box';

const Feed = () => {
  const theme = useTheme<Theme>();
  const [subscribedSubreddits] = useState<string[]>(['Minecraft', 'cellbits']);
  const [posts] = useState<PostType[]>(postsMock);

  return (
    <>
      <Header />
      
      <ScrollView 
        style={{ backgroundColor: theme.colors.mainForeground }}
        contentContainerStyle={{
          elevation: 2,
          zIndex: 2,
          shadowColor: 'transparent',
          backgroundColor: theme.colors.mainForeground,
        }}
      >
        {posts.map((post, index) => (
          <PostCard
            key={index}
            post={post}
            isUserSubscribed={subscribedSubreddits.includes(post.subredditName)} />
        ))}

        <Box
          elevation={2}
          zIndex={2}
          shadowColor="transparent"
          backgroundColor="mainForeground"
          height={theme.spacing.m} />
      </ScrollView>
    </>
  );
}

export default Feed;