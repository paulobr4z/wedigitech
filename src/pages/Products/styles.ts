import styled from 'styled-components';
import { FiMinus, FiPlus } from 'react-icons/fi'
import { Colors } from '../../styles/colors';

export const ProductsContainer = styled.div`
  width: 100%;
  background-color: ${Colors.primary};
`;

export const ProductsBanner = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 755px;
  padding: 83px 60px;
  background-image: url("/assets/img/products_banner.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(360deg, #06092B 17.88%, rgba(6, 9, 43, 0) 70.07%);
    opacity: 0.8;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
  }

  @media (max-width: 800px) {
    padding: 60px 20px;
    height: 616px;
  }

  .left-content {
    width: 100%;
    max-width: 580px;
    z-index: 99;

    @media (max-width: 1300px) {
      max-width: none;
    }

    h1 {
      position: relative;
      font-weight: 900;
      font-size: 46px;
      line-height: 52px;
      color: ${Colors.white};
      margin-bottom: 30px;

      &::before {
        position: absolute;
        bottom: -5px;
        content: "";
        width: 50px;
        border-bottom: 5px solid ${Colors.purple};
      }
    }

    p {
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      letter-spacing: 0.02em;
      color: ${Colors.white};
    }
  }

  .right-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 99;
    width: 100%;


    strong {
      font-weight: 800;
      font-size: 20px;
      line-height: 26px;
      letter-spacing: 0.02em;
      text-decoration-line: line-through;
      color: ${Colors.white};
      opacity: 0.5;
      margin-bottom: 6px;
    }

    h3 {
      font-weight: 800;
      font-size: 28px;
      line-height: 32px;
      letter-spacing: 0.02em;
      color: ${Colors.white};
      margin-bottom: 30px;
    }

    span {
      display: flex;
      align-items: flex-end;
      gap: 23px;

      &:first-of-type {
        margin-bottom: 30px;
      }

      @media (max-width: 800px) {
        flex-direction: column;
      }
    }

    .counter {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      background: rgba(6, 9, 43, 0.25);
      width: 150px;
      height: 56px;
      border: 2px solid ${Colors.secundary};
      border-radius: 5px;
      color: ${Colors.white};

      p {
        font-weight: 900;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 0.05em;
        color: ${Colors.white};
      }
    }
  }
`;

export const IconMinus = styled(FiMinus)`
  color: ${Colors.white};
  cursor: pointer;
`;

export const IconPlus = styled(FiPlus)`
  color: ${Colors.white};
  cursor: pointer;
`;

export const DescriptionAndDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 160px 60px;
  padding-bottom: 0;
  gap: 60px;

  @media (max-width: 1300px) {
    flex-direction: column;
  }

  @media (max-width: 800px) {
    padding: 60px 20px;
  }


  h2 {
    font-weight: 800;
    font-size: 34px;
    line-height: 40px;
    letter-spacing: 0.02em;
    color: ${Colors.white};
    margin-bottom: 60px;
    border-left: 5px solid ${Colors.purple};
    padding-left: 15px;
  }

  .description {
    width: 100%;

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 25px;
      color: ${Colors.white};

      &:first-of-type {
        margin-bottom: 18px;
      }
    }
  }

  .details {
    width: 100%;
    max-width: 580px;

    span {
      display: grid;
      grid-template-columns: 153px 1fr;

      strong {
        font-weight: 500;
        font-size: 16px;
        line-height: 25px;
        letter-spacing: 0.02em;
        color: ${Colors.white};
      }
      p {
        font-weight: 700;
        font-size: 16px;
        line-height: 25px;
        letter-spacing: 0.02em;
        color: ${Colors.white};
        padding-bottom: 16px;

      }
    }
  }
`;