import styled, { css, CSSProp } from 'styled-components';
import { Colors } from '../../styles/colors';
import { pxToRem } from '../../utils';

interface ITag {
  type: 'discount' | 'emphasis' | 'news' | 'lastUnits' | 'comingSoon' | string;
  styleProps?: CSSProp;
}

export const TagContainer = styled.div<ITag>`
  position: absolute;
  top: 25px;
  left: 20px;
  padding: 5px 15px;
  border-radius: 100px;

  font-weight: 800;
  font-size: ${pxToRem(14)};
  text-align: center;
  letter-spacing: 0.02em;
  color: #FFFFFF;

  ${({ type }) => type === 'discount' && css`
    background-color: ${Colors.yellow}
  `};
  ${({ type }) => type === 'emphasis' && css`
    background-color: ${Colors.purple}
  `};
  ${({ type }) => type === 'news' && css`
    background-color: ${Colors.secundary}
  `};
  ${({ type }) => type === 'lastUnits' && css`
    background-color: ${Colors.red}
  `};
  ${({ type }) => type === 'comingSoon' && css`
    background-color: ${Colors.primary}
  `};
`;