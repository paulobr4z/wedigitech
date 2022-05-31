import { Link } from "react-router-dom";
import { HeaderMobile } from "../HeaderMobile";
import { InputSearch } from "../Inputs/InputSearch";
import {
  HeaderContainer,
  HeaderMenu,
  HeaderNotice,
} from "./styles";

export function Header() {
  return(
    <HeaderContainer>
      <HeaderNotice>
        <img src="./assets/icons/truck.svg" alt="truck" />
        <p>
          Frete grátis a partir de R$ 170,00
        </p>
      </HeaderNotice>
      <HeaderMenu>
        <main>
          <div className="left-content">
            <img src="./assets/icons/logo.svg" alt="logo" />
            <ul>
              <li>
                <Link to="#">Ação</Link>
              </li>
              <li>
                <Link to="#">Aventura</Link>
              </li>
              <li>
                <Link to="#">RPG</Link>
              </li>
              <li>
                <Link to="#">Estratégia</Link>
              </li>
              <li>
                <Link to="#">Simulação</Link>
              </li>
            </ul>
          </div>
          <div className="right-content">
            <InputSearch />
            <img src="./assets/icons/user.svg" alt="user" />
            <img src="./assets/icons/basket.svg" alt="basket" />
          </div>
        </main>
      </HeaderMenu>
      <HeaderMobile />
    </HeaderContainer>
  )  
}