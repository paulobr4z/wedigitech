import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { pxToRem } from '../../utils';

export const FooterContainer = styled.div`
  width: 100%;
  padding: 0 60px;
  background-color: ${Colors.primary_dark};

  @media (max-width: 800px) {
    padding: 0 20px;
  }

  .newsletter {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-bottom: 1px solid rgba(72,57,255, 0.1);
    padding: 80px 0;

    @media (max-width: 1600px) {
      display: grid;
      grid-template-columns: 1fr;
    }

    form {
      display: flex;
      gap: 20px;
      width: 100%;

      @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr;
      }
    }

    h3 {
      font-weight: 800;
      font-size: ${pxToRem(24)};
      line-height: 32px;
      letter-spacing: 0.02em;
      color: ${Colors.white};
      margin-bottom: 13px;

      @media (max-width: 1024px) {
        display: flex;
        align-items: center;
        width: 100%;
      }
    }

    p {
      font-weight: 500;
      font-size: ${pxToRem(16)};
      line-height: 25px;
      letter-spacing: 0.02em;
      color: ${Colors.white};
      opacity: 0.5;
    }

    input {
      width: 100%;
      height: 60px;
      padding: 0 40px;
      border: 2px solid rgba(72, 57, 255, 0.25);
      background-color: transparent;
      border-radius: 10px;

      font-weight: 500;
      font-size: ${pxToRem(12)};
      letter-spacing: 0.05em;
      color: ${Colors.white};
      opacity: 0.5;
    }

    button {
      height: 60px;
      width: 100%;
      background-color: ${Colors.purple};
      border: none;
      border-radius: 10px;
      font-weight: 800;
      font-size: 18px;
      text-align: center;
      letter-spacing: 0.02em;
      color: ${Colors.white};
    }
  }

  .links {
    display: flex;
    justify-content: space-between;
    padding: 80px 0;

    @media (max-width: 1400px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }

    @media (max-width: 900px) {
      display: grid;
      grid-template-columns: 1fr;
    }

    p {
      font-weight: 800;
      font-size: ${pxToRem(18)};
      line-height: 25px;
      letter-spacing: 0.02em;
      color: ${Colors.white};
      margin-bottom: 15px;
    }

    li {
      font-weight: 400;
      font-size: ${pxToRem(14)};
      line-height: 25px;
      letter-spacing: 0.02em;
      color: ${Colors.white};
      opacity: 0.75;
      list-style: none;

      img {
        margin-right: 15px;
      }
    }

    span {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .instagram-title {
      display: flex;
      align-items: center;
      column-gap: 15px;
      margin-bottom: 15px;

      h5 {
        font-weight: 800;
        font-size: ${pxToRem(18)};
        line-height: 25px;
        letter-spacing: 0.02em;
        color: ${Colors.white};
      }
    }

    .instagram-post {
      display: flex;
      column-gap: 20px;
    }
  }

  .rights-reserved {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 24px;

    @media (max-width: 1100px) {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }

    p {
      font-weight: 400;
      font-size: ${pxToRem(12)};
      line-height: 16px;
      letter-spacing: 0.02em;
      color: ${Colors.white};
      opacity: 0.75;

      @media (max-width: 1100px) {
        text-align: center;
      }
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 30px;
    }
  }
`;