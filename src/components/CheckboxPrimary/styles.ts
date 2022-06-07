import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { pxToRem } from '../../utils';

interface ICheckboxPrimaryContainer {
  type: "square" | "round";
}

export const CheckboxPrimaryContainer = styled.div<ICheckboxPrimaryContainer>`
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: block;
    position: relative;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: transparent;
    border-radius: ${({ type }) => type === "square" ? '5px' : "100px" };
    border: 1px solid ${Colors.purple};
  }

  .container:hover input ~ .checkmark {
    background-color: rgba(29, 184, 251, 0.25);
  }

  .container:hover input ~ .checkmark {
    opacity: 0.8;
  }

  .container input:checked ~ .checkmark {
    background-color: ${Colors.purple};
  }

  .container .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 3px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }
`;