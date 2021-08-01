import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  height: ${({ scrollNav }) => (scrollNav ? '80px' : '100px')};
  background: ${({ scrollNav }) =>
    scrollNav
      ? 'linear-gradient(304.49deg, #001443 45.38%, #000A2C 82.48%)'
      : 'transparent'};
  background: ${({ scrollNav }) =>
    scrollNav && '0 0px 8px 0 rgba(31, 38, 135, 0.22)'};
  transition: 0.3s ease-in;
  z-index: 100;
`;

export const Logo = styled.img`
  width: 124px;
  height: 48px;
  object-fit: contain;
`;

export const HeaderList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const HeaderItem = styled.li`
  text-transform: uppercase;
  font-family: Gotham-Medium, sans-serif;
`;

export const HeaderButton = styled.span`
  text-transform: uppercase;
  font-family: Gotham-Medium, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30.5px;
  padding: 15px 25px;
  color: #fff;
  background: rgb(196, 74, 216);
  background: linear-gradient(
    90deg,
    rgba(196, 74, 216, 1) 0%,
    rgba(249, 127, 194, 1) 100%
  );
  &:hover {
    cursor: pointer;
  }
`;
