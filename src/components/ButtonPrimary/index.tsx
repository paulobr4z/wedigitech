import { 
  Button,
} from "./styles";

interface IButtonPrimary {
  textButton: string;
  typeButton: "small" | "medium" | "large"
}

export function ButtonPrimary({
  textButton,
  typeButton
}:IButtonPrimary) {
  return (
    <Button typeButton={typeButton}>
      {textButton}
    </Button>
  ) 
}