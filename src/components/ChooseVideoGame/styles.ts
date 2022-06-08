import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { pxToRem } from '../../utils';

export const ChooseVideoGameContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 60px;
  width: 100%;
  padding: 160px 60px;

  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 800px) {
    padding: 60px 20px;
  }

  .banner {
    height: 610px;
    width: 100%;
    background-image: url('/assets/img/choose_video_game_banner.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  h2 {
    font-weight: 800;
    font-size: ${pxToRem(34)};
    line-height: 40px;
    letter-spacing: 0.02em;
    margin-bottom: 60px;
    color: ${Colors.white};
  }

  p {
    font-weight: 500;
    font-size: ${pxToRem(16)};
    line-height: 25px;
    letter-spacing: 0.02em;
    color: ${Colors.white};

    &:first-of-type {
      margin-bottom: 18px;
    }
  }
`;