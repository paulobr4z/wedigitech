import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
import { pxToRem } from '../../utils';

export const HomeContainer = styled.div`
  width: 100%;
  background-color: ${Colors.primary};
`;

export const HomeBanner = styled.div`
  position: relative;
  width: 100%;
  height: 750px;
  background-image: url("/assets/img/banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 800px) {
    height: 616px;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 100%;
    margin-bottom: 48px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 750px;
    background: linear-gradient(360deg, #06092B 17.88%, rgba(6, 9, 43, 0) 70.07%);
    opacity: 0.8;

    @media (max-width: 800px) {
      height: 616px;
    }
  }

  .left-content {
    position: absolute;
    bottom: 0px;
    margin-left: 60px;
    margin-bottom: 35px;

    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;
      width: 100%;
      margin-bottom: 48px;
    }

    h1 {
      font: ${Fonts.heading_1};
      color: ${Colors.white};
      line-height: 52px;

      @media (max-width: 1024px) {
        font-size: 2rem;
        text-align: center;
        padding: 0 20px;
        line-height: 35px;
        margin-bottom: 16px;
      }
    }

    p {
      font-size: 1.25rem;
      color: ${Colors.white};
      margin-bottom: 27px;
      font-weight: 600;
      line-height: 28px;

      @media (max-width: 1024px) {
        font-size: 1rem;
        padding: 0 20px;
        text-align: center;
      }

      strong {
        color: ${Colors.secundary};
        font-weight: 900;
      }
    }
  }

  .right-content {
    position: absolute;
    top: 196px;
    right: 20%;

    @media (max-width: 1024px) {
      right: 50%;
      transform: translateX(50%);
    }

    @media (max-width: 800px) {
      top: 170px;
    }

    img {
      @media (max-width: 800px) {
        width: 400px;
      }
      @media (max-width: 600px) {
        width: 265px;
      }
    }
  }
`;

export const SearchByPlatform = styled.div`
  width: 100%;
  padding: 0 60px;
  margin-bottom: 160px;

  @media (max-width: 800px) {
    padding: 0 20px;
    margin-bottom: 60px;
  }

  h3 {
    font: ${Fonts.heading_3};
    color: ${Colors.white};
    padding-left: 15px;
    border-left: 5px solid ${Colors.purple};
    margin-bottom: 60px;

    @media (max-width: 600px) {
      font-size: ${pxToRem(20)};
      margin-bottom: 30px;
    }
  }

  .platforms-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
    align-items: center;
    justify-content: center;
    gap: 30px;

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      gap: 15px;
    }

    .platform {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      width: 100%;
      background-color: ${Colors.secundary};
      border-radius: 4px;

      img {
        height: 100%;
      }

      @media (max-width: 800px) {
        height: 175px;
      }

      h4 {
        font-family: 'Poppins';
        font-weight: 800;
        font-size: ${pxToRem(26)};
        line-height: 34px;
        letter-spacing: 0.02em;
        color: ${Colors.white};
        padding: 14px 18px;

        @media (max-width: 600px) {
          font-size: ${pxToRem(20)};
        }
      }
    }
  }
`;

export const ComingSoon = styled.div`
  width: 100%;
  padding: 0 60px;

  @media (max-width: 800px) {
    padding: 0 20px;
  }

  .coming-soon-wrapper {
    position: relative;
    height: 750px;
    width: 100%;

    @media (max-width: 800px) {
      height: 374px;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 4px;
    }

    span {
      position: absolute;
      top: 200px;
      right: 240px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      @media (max-width: 1500px) {
        right: 100px;
      }

      @media (max-width: 1200px) {
        right: 50px;
      }

      @media (max-width: 800px) {
        top: 80px;
        right: 15px;
      }

      h1 {
        position: relative;
        font-family: 'Poppins';
        font-weight: 900;
        font-size: ${pxToRem(46)};
        line-height: 52px;
        color: ${Colors.primary_dark};

        @media (max-width: 1300px) {
          font-size: ${pxToRem(32)};
        }

        @media (max-width: 1024px) {
          font-size: ${pxToRem(28)};
        }

        &::before {
          position: absolute;
          bottom: -5px;
          content: "";
          width: 50px;
          border-bottom: 5px solid ${Colors.purple};
        }
      }

      h2 {
        position: relative;
        font-family: 'Poppins';
        font-weight: 900;
        font-size: ${pxToRem(46)};
        line-height: 52px;
        color: ${Colors.primary_dark};

        @media (max-width: 1300px) {
          font-size: ${pxToRem(32)};
        }

        @media (max-width: 1024px) {
          font-size: ${pxToRem(28)};
        }
      }

      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: ${pxToRem(16)};
        line-height: 28px;
        letter-spacing: 0.02em;
        color: ${Colors.white};
        margin-bottom: 38px;
      }
    }
  }
`;

export const OtherHighlights = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  flex-wrap: wrap;
  padding: 0 60px;
  width: 100%;
  gap: 28px;

  @media (max-width: 800px) {
    padding: 0 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .mario, .fifa {
    position: relative;
    width: 100%;
    height: 585px;
    background-image: url("/assets/img/mario_banner.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 4px;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background: linear-gradient(180deg, rgba(72, 57, 255, 0) 0%, #4839FF 79.83%);
    }
  }

  .fifa {
    background-image: url("/assets/img/fifa_banner.png");
  }

  .other-highlights-content {
    position: absolute;
    bottom: 35px;
    left: 40px;

    @media (max-width: 800px) {
      left: 20px;
      bottom: 20px;
    }

    h2 {
      position: relative;
      font-family: 'Poppins';
      font-weight: 800;
      font-size: ${pxToRem(34)};
      line-height: 40px;
      letter-spacing: 0.02em;
      color: ${Colors.white};
      margin-bottom: 15px;

      @media (max-width: 800px) {
        font-size: ${pxToRem(28)};
      }

      &::before {
        content: "";
        position: absolute;
        bottom: -8px;
        width: 50px;
        border-bottom: 5px solid ${Colors.secundary};
      }
    }
    
    p {
      font-family: 'Poppins';
      font-weight: 600;
      font-size: ${pxToRem(16)};
      line-height: 28px;
      letter-spacing: 0.02em;
      color: #FFFFFF;
      margin-bottom: 15px;
    }
  }
`;