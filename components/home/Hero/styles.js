import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('/static/images/hero/hero.png');
  height: 100vh;
  max-height: 1080px;
  max-width: 1920px;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
  background-size: cover;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeadLine = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 200px;
  height: 100%;
  flex-direction: column;
  width: 955px;
  height: 239px;
  img {
    object-fit: contain;
    width: 100%;
  }
`;

export const Text = styled.div`
  width: 506px;
  height: 156px;
  margin-left: 200px;

  p {
    font-family: 'CircularStd-Regular';
    color: rgba(26, 28, 34, 0.6);
    font-weight: 400;
    font-size: 24px;
    font-family: CircularStd-Regular;
  }
`;

export const HeroButton = styled.div`
  margin-left: 200px;
  width: 264px;
  height: 81px;
  span {
    font-size: 20px;
    text-transform: uppercase;
  }
`;
