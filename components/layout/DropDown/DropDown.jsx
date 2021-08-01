import {
  DropDownContainer,
  Icon,
  ExitIcon,
  DropDownWrapper,
  DropDownMenu,
  DropDownLink,
} from './styles';

const data = [
  { title: 'Partners', link: '#/' },
  { title: 'Supporters', link: '#/' },
  { title: 'Speakers', link: '#/' },
  {
    title: 'Join Podcast',
    link: 'https://open.spotify.com/show/6E2M8oDnvBky4V5w1QgsTH?si=Z0pW0jDBQFms_6xU-qx6JA&dl_branch=1',
  },
  { title: 'Sign Up', link: 'https://www.meetup.com/tomorrowfinance/' },
];

const DropDown = ({ toggle, isOpen }) => {
  return (
    <DropDownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <ExitIcon onClick={toggle} />
      </Icon>

      <DropDownWrapper>
        <DropDownMenu>
          {data.map((item, index) => (
            <DropDownLink href={item.link} key={index}>
              {item.title}
            </DropDownLink>
          ))}
        </DropDownMenu>
      </DropDownWrapper>
    </DropDownContainer>
  );
};

export default DropDown;
