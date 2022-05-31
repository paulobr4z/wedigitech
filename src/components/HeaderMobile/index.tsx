import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderMobileContainer,
  HeaderMobileNotice,
  HeaderMobileMenu,
  HeaderMobileMenuSide,
} from "./styles";

export function HeaderMobile() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <HeaderMobileContainer>
      <HeaderMobileNotice>
        <img src="./assets/icons/truck.svg" alt="truck" />
        <p>
          Frete grátis a partir de R$ 170,00
        </p>
      </HeaderMobileNotice>
      <HeaderMobileMenu open={searchOpen}>
        <img
          onClick={() => setMenuOpen(!menuOpen)}
          src="/assets/icons/menu.svg" 
          alt="menu"
        />
        <img src="/assets/icons/logo.svg" alt="logo" />
        <img
          onClick={() => setSearchOpen(!searchOpen)}
          src="/assets/icons/search.svg"
          alt="search"
        />
        <div className="input-container">
          <input type="search" placeholder="Digite o que deseja buscar" />
        </div>
      </HeaderMobileMenu>
      <HeaderMobileMenuSide open={menuOpen}>
        <div className="userContent">
          <span>
            <img src="/assets/icons/user.svg" alt="user" />
            <p>Minha conta</p>
          </span>
          <img
            onClick={() => setMenuOpen(false)}
            src="/assets/icons/close.svg" 
            alt="close" 
          />
        </div>
        <div className="genres">
          <h5>Gêneros</h5>
          <p>Ação</p>
          <p>Aventura</p>
          <p>RPG</p>
          <p>Estratégia</p>
          <p>Simulação</p>
        </div>
        <div className="platforms">
          <h5>Gêneros</h5>
          <p>Ação</p>
          <p>Aventura</p>
          <p>RPG</p>
          <p>Estratégia</p>
          <p>Simulação</p>
        </div>
      </HeaderMobileMenuSide>
    </HeaderMobileContainer>
  )  
}