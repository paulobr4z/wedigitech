import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi'
import { Colors } from '../../../styles/colors';

export const InputSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 275px;
  border: 1px solid ${Colors.purple};
  border-radius: 5px;
  padding: 12px 20px;

  input {
    background-color: transparent;
    border: none;
    width: 100%;
    color: rgba(255,255,255,0.3);
  }
`;

export const SearchIcon = styled(FiSearch)`
  color: ${Colors.white};
  font-size: 18px;
  cursor: pointer;
`;