import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { pxToRem } from '../../utils';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .game {
    display: flex;
    column-gap: 30px;
    overflow: hidden;

    .games-content {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        border-radius: 5px;
        height: 100%;
        width: 100%;
        object-fit: contain;
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
      height: 417px;
      width: 356px;
    }
  }
`;