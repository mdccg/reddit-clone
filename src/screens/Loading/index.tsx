import { useTheme } from '@shopify/restyle';
import PulsatingCircle from '../../components/PulsatingCircle';
import { Theme } from '../../stylesheets/theme';
import { LoadingContainer, RedditIcon, RedditIconContainer } from './styles';

const Loading = () => {
  const theme = useTheme<Theme>();
  const { cardPrimaryBackground } = theme.colors;

  return (
    <LoadingContainer>
      <PulsatingCircle duration={2000} size={96} color={cardPrimaryBackground}>
        <RedditIconContainer>
          <RedditIcon />
        </RedditIconContainer>
      </PulsatingCircle>
    </LoadingContainer>
  );
}

export default Loading;