import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
import { pxToRem } from '../../utils';

export const CarouselContainer = styled.div`
  width: 100%;
  padding: 160px 60px;

  @media (max-width: 800px) {
    padding: 60px 20px;
  }

  .title-and-control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding-left: 15px;
    border-left: 5px solid ${Colors.purple};
    margin-bottom: 60px;

    h3 {
      font: ${Fonts.heading_3};
      color: ${Colors.white};
    }

    span > img {
      margin-right: 15px;
    }

    img {
      cursor: pointer;
    }
  }

  .card {
    display: flex;
    column-gap: 30px;
    overflow: hidden;

    .games-content {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        border-radius: 5px;
      }

      span {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        color: ${Colors.white};
        padding: 16px;
        height: 166px;

        .developer {
          font-size: ${pxToRem(14)};
          font-weight: 400;
          line-height: ${pxToRem(20)};
          text-align: center;
          letter-spacing: 0.02em;
        }

        .title {
          font-weight: 800;
          font-size: ${pxToRem(20)};
          line-height: ${pxToRem(26)};
          text-align: center;
          letter-spacing: 0.02em;
        }

        .old-price {
          font-weight: 500;
          font-size: ${pxToRem(12)};
          line-height: 14px;
          text-align: center;
          text-decoration-line: line-through;
        }
        .new-price {
          font-weight: 800;
          font-size: ${pxToRem(18)};
          line-height: 26px;
          text-align: center;
        }
        .payment-conditions {
          font-weight: 500;
          font-size: ${pxToRem(14)};
          line-height: 20px;
          text-align: center;
        }
      }
    }

    .poster {
      position: relative;
    }
  }
`;