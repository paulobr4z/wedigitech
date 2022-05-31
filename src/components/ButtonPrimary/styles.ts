import styled, { css } from 'styled-components';
import { Colors } from '../../styles/colors';

interface IButton {
  typeButton: "small" | "medium" | "large"
}

export const Button = styled.button<IButton>`
  background: linear-gradient(177.65deg, #1DB8FB 1.96%, #158ABC 98.03%);
  border-radius: 5px;
  border: none;
  color: ${Colors.white};
  font-family: 'Poppins', sans-serif;
  font-weight: 900;

  ${({ typeButton }) => typeButton === 'small' && css`
    padding: 12px 20px;
    font-size: 0.875rem;
    font-weight: 700;
  `};
  ${({ typeButton }) => typeButton === 'medium' && css`
    padding: 15px 30px;
    font-size: 0.875rem;
  `};
  ${({ typeButton }) => typeButton === 'large' && css`
    padding: 20px 50px;
    font-size: 1rem;
  `};
`;