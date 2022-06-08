import styled from 'styled-components';
import { Colors } from '../../../styles/colors';

export const InputCalculateShippingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 45px;
  border: 2px solid ${Colors.secundary};
  border-radius: 5px;
  padding: 12px 0 12px 20px;
  background: rgba(6, 9, 43, 0.25);

  input {
    background-color: transparent;
    border: none;
    width: 100%;
    height: 100%;
    color: ${Colors.white};
  }

  .calc {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    background: linear-gradient(177.65deg, #1DB8FB 1.96%, #158ABC 98.03%);
    border-radius: 5px;
    color: ${Colors.white};
    font-weight: 900;
    height: 45px;
    width: 160px;
  }
`;
