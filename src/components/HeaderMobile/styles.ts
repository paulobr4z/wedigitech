import styled from 'styled-components';
import { Colors } from '../../styles/colors';

interface ISearch {
  open: boolean;
}

export const HeaderMobileContainer = styled.div`
  width: 100%;
`;

export const HeaderMobileNotice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  width: 100%;
  height: 40px;
  background-color: ${Colors.secundary};

  @media (min-width: 1300px) {
    display: none;
  }

  p {
    font-size: 0.75rem;
    color: #FFFFFF;
    font-weight: 600;
  }
`;

export const HeaderMobileMenu = styled.div<ISearch>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background-color: ${Colors.primary};
  padding: 0 20px;

  @media (min-width: 1300px) {
    display: none;
  }

  img {
    cursor: pointer;
  }

  .input-container {
    position: absolute;
    top: 50%;
    right: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: ${({ open }) => open ? 'calc(100% - 50px)' : '0px'};
    background: ${Colors.primary};
    transform: translateY(-50%);
    padding-left: ${({ open }) => open ? '20px' : '0px'};
    overflow: hidden;
    transition: width 0.2s ease-in-out;

    input {
      background-color: transparent;
      border: none;
      color: rgba(255,255,255,0.7);
      font-size: 0.875rem;
      width: 100%;
      margin-right: 16px;
    }
  }
`;

export const HeaderMobileMenuSide = styled.div<ISearch>`
  position: absolute;
  top: 0;
  left: ${({ open }) => open ? '0px' : '-425px'};
  width: 100%;
  background-color: ${Colors.primary};
  padding: 37px 20px;
  min-height: 100%;
  max-width: 425px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  z-index: 999;

  .userContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${Colors.secundary};
    padding-bottom: 16px;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 14px;

      p {
        font-size: 0.875rem;
        font-weight: 500;
        color: ${Colors.white};
      }
    }
  }

  .genres {
    display: flex;
    flex-direction: column;
    padding: 21px 0;
    row-gap: 10px;
    border-bottom: 1px solid ${Colors.secundary};

    h5 {
      font-size: 0.875rem;
      font-weight: 800;
      color: ${Colors.white};
      line-height: 30px;  
    }

    p {
      font-size: 0.875rem;
      font-weight: 500;
      color: ${Colors.white};
      line-height: 24px;  
    }
  }

  .platforms {
    display: flex;
    flex-direction: column;
    padding: 21px 0;
    row-gap: 10px;

    h5 {
      font-size: 0.875rem;
      font-weight: 800;
      color: ${Colors.white};
      line-height: 30px;  
    }

    p {
      font-size: 0.875rem;
      font-weight: 500;
      color: ${Colors.white};
      line-height: 24px;  
    }
  }
`;