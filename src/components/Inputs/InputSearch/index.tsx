import { 
  InputSearchContainer,
  SearchIcon
} from "./styles";

export function InputSearch() {
  return(
    <InputSearchContainer>
      <input type="search" placeholder="Faça sua busca" />
      <SearchIcon />
    </InputSearchContainer>
  )  
}