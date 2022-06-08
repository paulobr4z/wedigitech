import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const HeaderContainer = styled.div`
  width: 100%;
`;

export const HeaderNotice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  width: 100%;
  height: 40px;
  background-color: ${Colors.secundary};

  @media (max-width: 1300px) {
    display: none;
  }

  p {
    font-size: 0.75rem;
    color: #FFFFFF;
    font-weight: 600;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: ${Colors.primary};

  @media (max-width: 1300px) {
    display: none;
  }

  main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1920px;
    padding: 0 60px;

    .left-content {
      display: flex;
      column-gap: 60px;

      ul {
        display: flex;
        align-items: center;
        column-gap: 60px;

        li {
          list-style: none;

          a {
            text-decoration: none;
            color: #FFFFFF;
            font-size: 0.875rem;
          }
        }
      }
    }

    .right-content {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 40px;

      input {
        margin-right: 15px;
      }

      img {
        cursor: pointer;
      }

      .basket {
        position: relative;

        span {
          position: absolute;
          top: -10px;
          right: -15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          background-color: red;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          font-size: 12px;
          border: 3px solid ${Colors.primary};
        }
      }
    }
  }
`;