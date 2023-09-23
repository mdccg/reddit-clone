import { useTheme } from '@shopify/restyle';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';
import { Image, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Theme } from '../stylesheets/theme';
import PostType from '../types/PostType';
import Box from './Box';
import Row from './Row';
import Text from './Text';
import CommentDotsRegularIcon from './icons/CommentDotsRegular';
import EllipsisVerticalSolidIcon from './icons/EllipsisVerticalSolid';
import ShareSolidIcon from './icons/ShareSolid';
import UpvoteRegularIcon from './icons/UpvoteRegular';
import UpvoteSolidIcon from './icons/UpvoteSolid';
import { formatVotes } from '../utils/validate_utils';

interface PostCardProps {
  post: PostType;
  isUserSubscribed: boolean;
}

const duration = 500;
const downAnimation = 'slideInUp';
const upAnimation = 'slideInDown';

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
  const [lastVoteCount, setLastVoteCount] = useState<number>(initialVotesCount);
  const [isUpvoted, setIsUpvoted] = useState<boolean>(false);
  const [isDownvoted, setIsDownvoted] = useState<boolean>(false);
  const [currentVoteAnimation, setCurrentVoteAnimation] = useState<typeof downAnimation | typeof upAnimation | undefined>();
  const [lastVoteAnimation, setLastVoteAnimation] = useState<string | undefined>();

  const UpvoteIcon = isUpvoted ? UpvoteSolidIcon : UpvoteRegularIcon;
  const DownvoteIcon = isDownvoted ? UpvoteSolidIcon : UpvoteRegularIcon;

  const upvote = () => {
    let newVotesCount = votesCount;

    if (isUpvoted) {
      --newVotesCount;
      setLastVoteCount(newVotesCount + 1);
      setCurrentVoteAnimation(downAnimation);
      setIsUpvoted(false);
      setVotesCount(newVotesCount);
    } else {
      if (isDownvoted) {
        ++newVotesCount;
        setLastVoteCount(newVotesCount - 1);
        setCurrentVoteAnimation(upAnimation);
        setIsDownvoted(false);
      }
      
      ++newVotesCount;
      setCurrentVoteAnimation(upAnimation);
      setIsUpvoted(true);
      setVotesCount(newVotesCount);
      setLastVoteCount(newVotesCount - 1);
    }
  }

  const downvote = () => {
    let newVotesCount = votesCount;

    if (isDownvoted) {
      ++newVotesCount;
      setCurrentVoteAnimation(upAnimation);
      setIsDownvoted(false);
      setVotesCount(newVotesCount);
      setLastVoteCount(newVotesCount - 1);
    } else {
      if (isUpvoted) {
        --newVotesCount;
        setLastVoteCount(newVotesCount + 1);
        setCurrentVoteAnimation(downAnimation);
        setIsUpvoted(false);
      }
      
      --newVotesCount;
      setCurrentVoteAnimation(downAnimation);
      setIsDownvoted(true);
      setVotesCount(newVotesCount);
      setLastVoteCount(newVotesCount + 1);
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

  useEffect(() => {
    setCurrentVoteAnimation(undefined);
    setLastVoteAnimation(undefined);
  }, [theme]);

  useEffect(() => {
    if (currentVoteAnimation) setLastVoteAnimation(currentVoteAnimation === 'slideInDown' ? 'fadeOutDown' : 'fadeOutUp');
  }, [currentVoteAnimation]);

  return (
    <>
      <Box
        elevation={2}
        zIndex={2}
        shadowColor="transparent"
        backgroundColor="mainForeground"
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
            marginBottom: theme.spacing.s,
          }]}>
            <Image source={image} style={[styles.image, {
              borderColor: theme.colors.mainBackground,
            }]} resizeMode="contain" />
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

      </Box>

      <Row
        paddingLeft="s"
        paddingRight="s"
        borderTopWidth={1}
        borderBottomWidth={1}
        borderColor="mainBackground"
        backgroundColor="mainForeground"
        minHeight={36}
      >
        <Row width="30%" marginRight="s">
          <TouchableOpacity onPress={upvote} style={styles.iconContainer}>
            <UpvoteIcon {...styles.voteIcon} fill={isUpvoted ? theme.colors.cardPrimaryBackground : theme.colors.iconPrimaryBackground} />
          </TouchableOpacity>

          <Box>
            <Animatable.View
              key={`${currentVoteAnimation}-${new Date().getMilliseconds()}`}
              animation={currentVoteAnimation}
              duration={duration}
            >
              <Box
                style={styles.countTextContainer}
                elevation={1}
                zIndex={1}
                shadowColor="transparent"
              >
                <Text style={[styles.countText,
                  isUpvoted ? {
                    color: theme.colors.cardPrimaryBackground,
                  } : (
                  isDownvoted ? {
                    color: theme.colors.buttonPrimaryBackground,
                  } : {}
                )]}>{formatVotes(votesCount)}</Text>
              </Box>
            </Animatable.View>

            <Animatable.View
              animation={lastVoteAnimation}
              duration={duration}
              style={[styles.lastValue, !lastVoteAnimation ? { opacity: 0 } : {}]}
            >
              <Box
                style={styles.countTextContainer}
                elevation={1}
                zIndex={1}
                shadowColor="transparent"
              >
                <Text style={[styles.countText,
                  isUpvoted ? {
                    color: theme.colors.cardPrimaryBackground,
                  } : (
                  isDownvoted ? {
                    color: theme.colors.buttonPrimaryBackground,
                  } : {}
                )]}>{formatVotes(lastVoteCount)}</Text>
              </Box>
            </Animatable.View>
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
    </>
  );
}

const styles = StyleSheet.create({
  lastValue: { position: 'absolute' },

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

  ellipsisVerticalSolidIcon: { width:  16, height: 16 },

  imageFrame: { maxWidth: '100%' },
  
  image: {
    maxWidth: '100%',
    height: 256,
    borderRadius: 20,
    borderWidth: 1,
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

  voteIcon: { width:  22, height: 22 },
  icon: { width:  16, height: 16 },

  countTextContainer: {
    alignItems: 'center',
    minWidth: 24,
  },

  countText: { fontSize: 12 },
});

export default PostCard;