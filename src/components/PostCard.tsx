import { useTheme } from '@shopify/restyle';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';
import { Image, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { Theme } from '../stylesheets/theme';
import PostType from '../types/PostType';
import Box from './Box';
import Row from './Row';
import Text from './Text';
import EllipsisVerticalSolidIcon from './icons/EllipsisVerticalSolid';
import UpvoteRegularIcon from './icons/UpvoteRegular';
import CommentDotsRegularIcon from './icons/CommentDotsRegular';
import ShareSolidIcon from './icons/ShareSolid';
import UpvoteSolidIcon from './icons/UpvoteSolid';

interface PostCardProps {
  post: PostType;
  isUserSubscribed: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  post: {
    subredditPicture,
    subredditName,
    creationDate,
    content,
    image,
    votesCount: initialVotesCount,
    commentsCount,
    sharesCount,
    isSponsored,
    website,
  },
  isUserSubscribed
}) => {
  const theme = useTheme<Theme>();
  const [relative, setRelative] = useState<string | undefined>();
  const [votesCount, setVotesCount] = useState<number>(initialVotesCount);
  const [isUpvoted, setIsUpvoted] = useState<boolean>(false);
  const [isDownvoted, setIsDownvoted] = useState<boolean>(false);

  const UpvoteIcon = isUpvoted ? UpvoteSolidIcon : UpvoteRegularIcon;
  const DownvoteIcon = isDownvoted ? UpvoteSolidIcon : UpvoteRegularIcon;

  const upvote = () => {
    let newVotesCount = votesCount;

    if (isUpvoted) {
      --newVotesCount;
      setIsUpvoted(false);
      setVotesCount(newVotesCount);
    } else {
      if (isDownvoted) {
        ++newVotesCount;
        setIsDownvoted(false);
      }
      
      ++newVotesCount;
      setIsUpvoted(true);
      setVotesCount(newVotesCount);
    }
  }

  const downvote = () => {
    let newVotesCount = votesCount;

    if (isDownvoted) {
      ++newVotesCount;
      setIsDownvoted(false);
      setVotesCount(newVotesCount);
    } else {
      if (isUpvoted) {
        --newVotesCount;
        setIsUpvoted(false);
      }
      
      --newVotesCount;
      setIsDownvoted(true);
      setVotesCount(newVotesCount);
    }
  }

  const openWebsite = async () => {
    if (!website) return;
    await Linking.openURL(`https://${website}`);
  }

  useEffect(() => {
    const getRelative = () => {
      if (!creationDate) return;
      const dateTime = DateTime.fromJSDate(creationDate);
      setRelative(`${dateTime.toRelative({ style: 'short' })}`);
    }

    getRelative();
  }, []);

  return (
    <Box
      borderBottomWidth={1}
      borderColor="mainBackground"
    >
      <Row
        justifyContent="space-between"
        paddingTop="m"
        paddingLeft="m"
        paddingRight="m"
      >
        <Row>
          <Image source={subredditPicture} style={[styles.subredditPicture, { marginRight: theme.spacing.s, }]} />
          <Text variant="bold" paddingRight="s" fontSize={12}>r/{subredditName}</Text>
          {(creationDate && relative) && <Text fontSize={10} color="grayBackground">{relative}</Text>}
          {(isSponsored) && <Text fontSize={10} color="grayBackground">Patrocinado</Text>}
        </Row>

        <TouchableOpacity style={styles.ellipsisVerticalSolidIconContainer}>
          <EllipsisVerticalSolidIcon {...styles.ellipsisVerticalSolidIcon} fill={theme.colors.grayBackground} />
        </TouchableOpacity>
      </Row>

      <Text
        marginTop="s"
        marginLeft="m"
        marginRight="m"
        variant="bold"
        fontSize={16}
      >
          {content}
      </Text>

      {image && (
        <Box style={[styles.imageFrame, {
          margin: theme.spacing.m,
          marginTop: theme.spacing.s,
        }]}>
          <Image source={image} style={styles.image} resizeMode="contain" />
        </Box>
      )}
      
      {website && (
        <TouchableOpacity style={{
          padding: theme.spacing.m,
          paddingTop: theme.spacing.s,
        }}
          onPress={openWebsite}
        >
          <Text fontSize={10} color="grayBackground">{website}</Text>
        </TouchableOpacity>
      )}

      <Row
        paddingLeft="s"
        paddingRight="s"
        borderTopWidth={1}
        borderColor="mainBackground"
      >
        <Row width="30%" marginRight="s">
          <TouchableOpacity onPress={upvote} style={styles.iconContainer}>
            <UpvoteIcon {...styles.voteIcon} fill={isUpvoted ? theme.colors.cardPrimaryBackground : theme.colors.iconPrimaryBackground} />
          </TouchableOpacity>

          <Box style={styles.countTextContainer}>
            <Text style={[styles.countText,
              isUpvoted ? {
                color: theme.colors.cardPrimaryBackground,
              } : (
              isDownvoted ? {
                color: theme.colors.buttonPrimaryBackground,
              } : {}
            )]}>{votesCount}</Text>
          </Box>

          <TouchableOpacity onPress={downvote} style={styles.iconContainer}>
            <DownvoteIcon {...styles.voteIcon} fill={isDownvoted ? theme.colors.buttonPrimaryBackground : theme.colors.iconPrimaryBackground} style={{ transform: [{ rotate: '180deg' }] }} />
          </TouchableOpacity>
        </Row>

        <TouchableOpacity style={[styles.button, { width: '20%', marginRight: theme.spacing.s, }]}>
          <Box style={styles.iconContainer}>
            <CommentDotsRegularIcon {...styles.icon} fill={theme.colors.iconPrimaryBackground} />
          </Box>

          <Text style={styles.countText}>{commentsCount}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { width: '50%' }]}>
          <Box style={styles.iconContainer}>
            <ShareSolidIcon {...styles.icon} fill={theme.colors.iconPrimaryBackground} />
          </Box>

          <Text numberOfLines={1}>
            {sharesCount ? (
              <Text style={styles.countText}>
                {sharesCount.toLocaleString()}
              </Text>
            ) : 'Compartilhar'}
          </Text>
        </TouchableOpacity>

        <Box />
      </Row>
    </Box>
  );
}

const styles = StyleSheet.create({
  subredditPicture: {
    width:  24,
    height: 24,
    borderRadius: 16,
  },

  ellipsisVerticalSolidIconContainer: {
    width:  24,
    height: 24,

    alignItems: 'flex-end',
  },

  ellipsisVerticalSolidIcon: {
    width:  16,
    height: 16,
  },

  imageFrame: {
    maxWidth: '100%',
  },
  
  image: {
    maxWidth: '100%',
    height: 256,
    borderRadius: 20,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    width:  36,
    height: 36,

    justifyContent: 'center',
    alignItems: 'center',
  },

  voteIcon: {
    width:  22,
    height: 22,
  },

  icon: {
    width:  16,
    height: 16,
  },

  countTextContainer: {
    alignItems: 'center',
    minWidth: 16,
  },

  countText: {
    fontSize: 12,
  },
});

export default PostCard;