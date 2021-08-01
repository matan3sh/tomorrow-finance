import { HeaderButton } from 'components/layout/Header/styles';
import { Container, HeadLine, Text, HeroButton } from './styles';

const Hero = () => {
  return (
    <Container>
      <HeadLine>
        <img src='/static/images/hero/headline.png' alt='Tomorrow-Finance' />
      </HeadLine>
      <Text>
        <p>
          We invite top notch leading financial thinkers, creators and founders
          of the most innovative fintechs, banks, neobanks, payments companies
          of the new finance revolution.
        </p>
      </Text>
      <HeroButton>
        <a
          href=' https://www.meetup.com/tomorrowfinance/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <HeaderButton>Sign Up Today &#8594;</HeaderButton>
        </a>
      </HeroButton>
    </Container>
  );
};

export default Hero;
