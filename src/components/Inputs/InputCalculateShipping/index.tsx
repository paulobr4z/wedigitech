import { 
  InputCalculateShippingContainer,
} from "./styles";

export function InputCalculateShipping() {
  return(
    <InputCalculateShippingContainer>
      <input type="text" placeholder="CEP" />
      <div className="calc">
        Calcular
      </div>
    </InputCalculateShippingContainer>
  )  
}