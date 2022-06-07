import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { pxToRem } from '../../utils';

interface ICategoriesPage {
  open: boolean;
}

export const CategoriesContainer = styled.div`
  width: 100%;
  background-color: ${Colors.primary};
`;

export const CategoriesBanner = styled.div`
  display: flex;
  width: 100%;
  height: 545px;
  background-color: ${Colors.secundary};
  column-gap: 30px;

  .left-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 60px;

    h1 {
      font-family: 'Poppins';
      font-weight: 900;
      font-size: ${pxToRem(46)};
      line-height: 52px;
      color: ${Colors.white};
      margin-bottom: 25px;
    }

    p {
      width: 580px;
      font-family: 'Poppins';
      font-weight: 600;
      font-size: ${pxToRem(14)};
      line-height: 22px;
      letter-spacing: 0.02em;
      color: ${Colors.white};
    }
  }

  .right-content {
    width: 100%;
    height: 100%;
    background-image: url("assets/img/categories_banner.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const GamesContainer = styled.div<ICategoriesPage>`
  width: 100%;

  .games-filter {
    display: flex;
    align-items: center;
    justify-content:space-between;
    width: 100%;
    padding: 60px;

    h6 {
      font-family: 'Poppins';
      font-weight: 900;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.05em;
      color: ${Colors.white};
    }

    .filter, .order {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 15px;
      padding: 15px 35px;
      background-color: transparent;
      border: 1px solid ${Colors.white};
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }

      p {
        font-family: 'Poppins';
        font-weight: 900;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.05em;
        color: ${Colors.white};
      }
    }
  }

  .games {
    display: flex;
    align-items: flex-start;
    padding: 0 60px;
    width: 100%;
    column-gap: ${({ open }) => open ? '30px' : '0px'};
    transition: all 0.3s ease-in-out;

    .side-filter {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      overflow: hidden;
      width: ${({ open }) => open ? '250px' : '0px'};
      transition: all 0.2s ease-in-out;
      overflow: hidden;
      
      nav {
        width: 250px;
        margin-bottom: 60px;
      }

      h6 {
        position: relative;
        font-family: 'Poppins';
        font-weight: 800;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        margin-bottom: 31px;

        &::before {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 50px;
          height: 5px;
          background-color: ${Colors.purple};
        }
      }

      nav {
        display: flex;
        flex-direction: column;
        row-gap: 10px;

        span {
          display: flex;
          align-items: center;
          column-gap: 10px;

          p {
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 12px;
            line-height: 20px;
            letter-spacing: 0.05em;
            color: ${Colors.white};
          }
        }
      }
    }

    .games-store-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(355px, 1fr));
      align-items: center;
      justify-content: center;
      column-gap: 25px;
      width: 100%;
    }

  }
  .load-more {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 70px 0;

    button {
      background-color: transparent;
      padding: 15px 35px;
      border-radius: 5px;
      border: 2px solid ${Colors.white};

      font-family: 'Poppins';
      font-weight: 900;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.05em;
      color: ${Colors.white};

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
