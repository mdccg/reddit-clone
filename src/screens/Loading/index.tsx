import PulsatingCircle from '../../components/PulsatingCircle';
import Theme from '../../stylesheets/theme';
import { LoadingContainer, RedditIcon, RedditIconContainer } from './styles';

const Loading = () => {
  return (
    <LoadingContainer>
      <PulsatingCircle duration={2000} size={72} color={Theme.colors.orange}>
        <RedditIconContainer>
          <RedditIcon />
        </RedditIconContainer>
      </PulsatingCircle>
    </LoadingContainer>
  );
}

export default Loading;