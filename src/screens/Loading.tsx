import { useTheme } from '@shopify/restyle';
import CenteredBox from '../components/CenteredBox';
import PulsatingCircle from '../components/PulsatingCircle';
import RedditIcon from '../components/icons/Reddit';
import { Theme } from '../stylesheets/theme';

const redditIconSize = 48;

const Loading = () => {
  const theme = useTheme<Theme>();
  const { cardPrimaryBackground } = theme.colors;

  return (
    <CenteredBox>
      <PulsatingCircle duration={2000} size={96} color={cardPrimaryBackground}>
        <CenteredBox width={redditIconSize} height={redditIconSize}>
          <RedditIcon width={redditIconSize} height={redditIconSize} />
        </CenteredBox>
      </PulsatingCircle>
    </CenteredBox>
  );
}

export default Loading;