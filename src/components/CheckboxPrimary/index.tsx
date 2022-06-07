import { useState } from "react";
import { CheckboxPrimaryContainer } from "./styles";

interface ICheckboxPrimary{
  isChecked?: boolean;
  handleCheck: (isChecked: boolean) => void;
  type: "square" | "round";
}

export function CheckboxPrimary({
  isChecked = false,
  handleCheck,
  type,
}:ICheckboxPrimary) {
  const [checked, setChecked] = useState(isChecked);

  function handleChange() {
    setChecked(!checked);
    handleCheck(checked)
  }

  return(
    <CheckboxPrimaryContainer
      type={type}
    >
      <label className="container">
        <input
          type="checkbox"
          onChange={handleChange}
        />
        <span className="checkmark"></span>
      </label>
    </CheckboxPrimaryContainer>
  )  
}