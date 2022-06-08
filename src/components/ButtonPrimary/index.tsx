import { 
  Button,
} from "./styles";

interface IButtonPrimary {
  textButton: string;
  typeButton: "small" | "medium" | "large"
  hasIcon?: boolean;
}

export function ButtonPrimary({
  textButton,
  typeButton,
  hasIcon = false
}:IButtonPrimary) {
  return (
    <Button typeButton={typeButton}>
      {textButton}
      {hasIcon && <img src="/assets/icons/basket.svg" alt="basket" />}
    </Button>
  ) 
}