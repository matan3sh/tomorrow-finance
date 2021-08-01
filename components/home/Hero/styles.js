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
  @media screen and (max-width: 1422px) {
    margin-left: 100px;
  }
  @media screen and (max-width: 1190px) {
    margin-left: 20px;
  }
  @media screen and (max-width: 1040px) {
    width: 885px;
    height: 169px;
  }
  @media screen and (max-width: 810px) {
    width: 100%;
  }
  img {
    object-fit: contain;
    width: 100%;
  }
`;

export const Text = styled.div`
  width: 506px;
  height: 156px;
  margin-left: 200px;
  @media screen and (max-width: 1422px) {
    margin-left: 100px;
  }
  @media screen and (max-width: 1190px) {
    margin-left: 20px;
  }
  @media screen and (max-width: 1040px) {
    margin-top: 25px;
  }
  @media screen and (max-width: 515px) {
    width: 300px;
  }

  p {
    font-family: 'CircularStd-Regular';
    color: rgba(26, 28, 34, 0.6);
    font-weight: 400;
    font-size: 24px;
    font-family: CircularStd-Regular;
    @media screen and (max-width: 515px) {
      font-size: 20px;
    }
  }
`;

export const HeroButton = styled.div`
  margin-left: 200px;
  width: 264px;
  height: 81px;
  @media screen and (max-width: 1422px) {
    margin-left: 100px;
  }
  @media screen and (max-width: 1190px) {
    margin-left: 20px;
  }
  span {
    font-size: 20px;
    text-transform: uppercase;
    @media screen and (max-width: 515px) {
      font-size: 16px;
      margin-top: 20px;
    }
  }
`;
