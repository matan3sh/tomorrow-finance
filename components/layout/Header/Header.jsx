import { useState } from 'react';
import DropDown from '../DropDown/DropDown';

import {
  Container,
  Logo,
  HeaderList,
  HeaderItem,
  HeaderButton,
  MenuBars,
} from './styles';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <Container>
      <Logo src='/static/images/header/logo.png' alt='Tomorrow Finance' />
      {/* <div></div> */}
      <MenuBars onClick={toggle} />

      <DropDown isOpen={isOpen} toggle={toggle} />
      <HeaderList>
        <HeaderItem>Partners</HeaderItem>
        <HeaderItem>Supporters</HeaderItem>
        <HeaderItem>Speakers</HeaderItem>
        <a
          href='https://open.spotify.com/show/6E2M8oDnvBky4V5w1QgsTH?si=Z0pW0jDBQFms_6xU-qx6JA&dl_branch=1'
          target='_blank'
          rel='noopener noreferrer'
        >
          <HeaderItem>Join Podcast</HeaderItem>
        </a>
        <a
          href='https://www.meetup.com/tomorrowfinance/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <HeaderButton>Sign Up</HeaderButton>
        </a>
      </HeaderList>
    </Container>
  );
};

export default Header;
