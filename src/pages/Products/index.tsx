import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import {
  DescriptionAndDetails,
  IconMinus,
  IconPlus,
  ProductsBanner,
  ProductsContainer,
} from "./styles";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { InputCalculateShipping } from "../../components/Inputs/InputCalculateShipping";
import { useState } from "react";
import { Carousel } from "../../components/Carousel";
import { HighlightsWeekData } from "../../constants/home";

export function Products() {
  const [counter, setCounter] = useState('01');

  function increment() {
    if (Number(counter) < 9) {
      setCounter(`0${Number(counter) + 1}`);
    } else {
      setCounter(`${Number(counter) + 1}`);
    }
  }
  
  function decrement() {
    if (Number(counter) === 1) return;
    
    if (Number(counter) < 11) {
      setCounter(`0${Number(counter) - 1}`);
    } else {
      setCounter(`${Number(counter) - 1}`);
    }
  }


  return (
    <ProductsContainer>
      <Header />
      <ProductsBanner>
        <div className="left-content">
          <h1>Resident Evil Village</h1>
          <p>
            Vivencie um jogo de terror como nenhum outro em Resident 
            Evil Village, o oitavo lançamento da franquia lendária.
          </p>
        </div>
        <div className="right-content">
          <strong>R$ 259,90</strong>
          <h3>R$ 199,90</h3>
          <span>
            <div className="counter">
              <IconMinus
                onClick={decrement}
              />
              <p>{counter}</p>
              <IconPlus
                onClick={increment}
              />
            </div>
            <ButtonPrimary
              textButton="Adicionar ao Carrinho"
              typeButton="large"
              hasIcon
            />
          </span>
          <span>
            <InputCalculateShipping />
          </span>
        </div>

      </ProductsBanner>

      <DescriptionAndDetails>
        <div className="description">
          <h2>Descrição</h2>
          <p>
            Vivencie um jogo de terror como nenhum outro em 
            Resident Evil Village, o oitavo lançamento da franquia 
            lendária.
          </p>
          <p>
            Ambientado anos depois dos eventos terríveis do aclamado 
            Resident Evil 7 Biohazard, a nova história começa com 
            Ethan Winters e sua esposa, Mia, vivendo pacificamente 
            em um novo lugar, livres do pesadelo do passado. Mas 
            quando estavam começando a construir uma nova vida, 
            ocorre novamente uma tragédia.
          </p>
        </div>
        <div className="details">
          <h2>Descrição</h2>
          <span>
            <strong>
              Plataforma:
            </strong>
            <p>
              PS4, PS5
            </p>
            <strong>
              Lançamento:
            </strong>
            <p>
              07/05/2021
            </p>
            <strong>
              Desenvolvedor:
            </strong>
            <p>
              Capcom U.S.A., Inc
            </p>
            <strong>
              Gênero:
            </strong>
            <p>
              Ação, Terror
            </p>
            <strong>
              Voz:
            </strong>
            <p>
              Alemão, Espanhol, Francês (França), Inglês, Italiano, Japonês, Português (Brasil), Russo
            </p>
            <strong>
              Idiomas da Tela:
            </strong>
            <p>
              Alemão, Espanhol, Francês (França), Inglês, Italiano, Japonês, Português (Brasil), Russo, Árabe
            </p>
          </span>
        </div>
      </DescriptionAndDetails>

      <Carousel
        title="Você também deve gostar de"
        carouselData={HighlightsWeekData}
      />

      <Footer />

    </ProductsContainer>
  )  
}