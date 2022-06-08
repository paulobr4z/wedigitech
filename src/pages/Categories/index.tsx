import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { CheckboxPrimary } from "../../components/CheckboxPrimary";
import { ChooseVideoGame } from "../../components/ChooseVideoGame";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { gamesData } from "../../constants/categories";
import { ICardGamesData } from "../../types";
import {
  CategoriesBanner,
  CategoriesContainer,
  GamesContainer,
} from "./styles";

export function Categories() {
  const [gameStock, setGameStock] = useState(gamesData);
  const [filterValue, setFilterValue] = useState<String[]>([]);
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);
  const [alphabeticalOrder, setAlphabeticalOrder] = useState('');

  function handleLoadMoreGames() {
    setGameStock([...gameStock, ...gamesData])
  }

  function handleFilterValue(checked: boolean, filter: string) {
    if (!filterValue.includes(filter)) {
      setFilterValue([...filterValue, filter]);
    }
    if (filterValue.includes(filter)) {
      setFilterValue([...filterValue].filter(value => value !== filter))
    }
  }

  useEffect(() => {
    function filterGamesByType() {    
      const filteredResults = gamesData.filter(item =>
        filterValue.some(val => item.tag_type === val)
      );
  
      if (filteredResults.length !== 0) {
        setGameStock(filteredResults);
      } else {
        setGameStock(gamesData);
      }
    }
    
    filterGamesByType();
  }, [filterValue]);

  function filterGamesByAlphabeticalOrder() {
    if (alphabeticalOrder === '') {
      const alphabeticalOrder = gamesData.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : - 1);
      setAlphabeticalOrder('sort');
      setGameStock(alphabeticalOrder);
    }
    if (alphabeticalOrder === 'sort') {
      const alphabeticalOrder = gamesData.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1);
      setAlphabeticalOrder('reverse');
      setGameStock(alphabeticalOrder);
    }
    if (alphabeticalOrder === 'reverse') {
      window.location.reload();
    }
  }

  return (
    <CategoriesContainer>
      <Header />
      <CategoriesBanner>
        <div className="left-content">
          <h1>Ação / Aventura</h1>
          <p>
            O gênero ação/aventura é, possivelmente, o maior gênero de todo
            o universo de videogames. Iniciado com Adventure (Atari 2600),
            em 1979, ele é a junção de mecânicas de dois gêneros já muito
            populares que resultou em uma fórmula de “fazer jogos” que se
            encaixa em muitas jogabilidades, histórias e estilos de narrativa
            diferentes.
          </p>
        </div>
        <div className="right-content"></div>
      </CategoriesBanner>
      <GamesContainer open={sideMenuIsOpen}>
        <div className="games-filter">
          <div className="filter" onClick={() => setSideMenuIsOpen(!sideMenuIsOpen)}>
            <img src="/assets/icons/filter.svg" alt="filter" />
            <p>Filtrar Busca</p>
          </div>
          <h6>Encontramos 150 jogos para você se divertir</h6>
          <div className="order" onClick={filterGamesByAlphabeticalOrder}>
            <img src="/assets/icons/order.svg" alt="order" />
            <p>Ordenar Por</p>
          </div>
        </div>
        <div className="games-filter-mobile">
          <h6>Encontramos 150 jogos para você se divertir</h6>
          <span>
            <div className="filter" onClick={() => setSideMenuIsOpen(!sideMenuIsOpen)}>
              <img src="/assets/icons/filter.svg" alt="filter" />
              <p>Filtrar Busca</p>
            </div>
            <div className="order" onClick={filterGamesByAlphabeticalOrder}>
              <img src="/assets/icons/order.svg" alt="order" />
              <p>Ordenar Por</p>
            </div>
          </span>
        </div>
        <div className="games">
          <div className="side-filter">
            {/* <nav>
              <h6>Plataforma</h6>
              <span>
                <CheckboxPrimary
                  type="square"
                  handleCheck={(checked) => handleFilterValue(checked, 'google_stadia')}
                />
                <p>Google Stadia</p>
              </span>
              <span>
                <CheckboxPrimary
                  type="square"
                  handleCheck={(checked) => handleFilterValue(checked, 'ps4')}
                />
                <p>PlayStation</p>
              </span>
              <span>
                <CheckboxPrimary
                  type="square"
                  handleCheck={(checked) => handleFilterValue(checked, 'xbox_one')}
                />
                <p>Xbox One</p>
              </span>
              <span>
                <CheckboxPrimary
                  type="square"
                  handleCheck={(checked) => handleFilterValue(checked, 'xbox_series')}
                />
                <p>Xbox Series</p>
              </span>
              <span>
                <CheckboxPrimary
                  type="square"
                  handleCheck={(checked) => handleFilterValue(checked, 'nintendo_wii')}
                />
                <p>Nintendo Wii</p>
              </span>
              <span>
                <CheckboxPrimary
                  type="square"
                  handleCheck={(checked) => handleFilterValue(checked, 'nintendo_switch')}
                />
                <p>Nintendo Switch</p>
              </span>
              <span>
                <CheckboxPrimary
                  type="square"
                  handleCheck={(checked) => handleFilterValue(checked, 'pc_windows')}
                />
                <p>PC Windows</p>
              </span>
              <span>
                <CheckboxPrimary
                  type="square"
                  handleCheck={(checked) => handleFilterValue(checked, 'pc_mac')}
                />
                <p>PC Mac</p>
              </span>
            </nav> */}
            <nav>
              <h6>Extras</h6>
              <span>
                <CheckboxPrimary
                  type="square"
                  handleCheck={(checked) => handleFilterValue(checked, 'news')}
                />
                <p>Novidade/Lançamento</p>
              </span>
              <span>
                <CheckboxPrimary
                  type="square"
                  handleCheck={(checked) => handleFilterValue(checked, 'discount')}
                />
                <p>Desconto</p>
              </span>
              <span>
                <CheckboxPrimary
                  type="square"
                  handleCheck={(checked) => handleFilterValue(checked, 'lastUnits')}
                />
                <p>Últimas Unidades</p>
              </span>
              <span>
                <CheckboxPrimary
                  type="square"
                  handleCheck={(checked) => handleFilterValue(checked, 'comingSoon')}
                />
                <p>Pré Lançamento/Em breve</p>
              </span>
            </nav>
            {/* <nav>
              <h6>Desenvolvedor</h6>
              <span>
                <CheckboxPrimary
                  type="square"
                  handleCheck={() => handleFilterValue('Google Stadia')}
                />
                <p>Ubisoft</p>
              </span>
              <span>
                <CheckboxPrimary
                  type="square"
                  handleCheck={() => handleFilterValue('Google Stadia')}
                />
                <p>Crystal Dynamics</p>
              </span>
              <span>
                <CheckboxPrimary
                  type="square"
                  handleCheck={() => handleFilterValue('Google Stadia')}
                />
                <p>FromSoftware</p>
              </span>
              <span>
                <CheckboxPrimary
                  type="square"
                  handleCheck={() => handleFilterValue('Google Stadia')}
                />
                <p>Naughty Dog</p>
              </span>
              <span>
                <CheckboxPrimary
                  type="square"
                  handleCheck={() => handleFilterValue('Google Stadia')}
                />
                <p>Bethesda Sofworks</p>
              </span>
              <span>
                <CheckboxPrimary
                  type="square"
                />
                <p>Capcom</p>
              </span>
            </nav> */}
            {/* <nav>
              <h6>Ordenar por</h6>
              <span>
                <CheckboxPrimary
                  type="round"
                  handleCheck={() => handleFilterValue('Google Stadia')}
                />
                <p>Mais relevantes</p>
              </span>
              <span>
                <CheckboxPrimary
                  type="round"
                  handleCheck={() => handleFilterValue('Google Stadia')}
                />
                <p>Menor Preço</p>
              </span>
              <span>
                <CheckboxPrimary
                  type="round"
                  handleCheck={() => handleFilterValue('Google Stadia')}
                />
                <p>Maior Preço</p>
              </span>
              <span>
                <CheckboxPrimary
                  type="round"
                  handleCheck={() => handleFilterValue('Google Stadia')}
                />
                <p>Mais Recentes</p>
              </span>
              <span>
                <CheckboxPrimary
                  type="round"
                  handleCheck={() => handleFilterValue('Google Stadia')}
                />
                <p>Mais Antigos</p>
              </span>
            </nav> */}
          </div>
          <div className="games-store-content">
            {gameStock.map((game: ICardGamesData, index: number) => (
              <Card cardData={game} key={index} />
            ))}
          </div>
        </div>
        <div
          className="load-more"
          onClick={handleLoadMoreGames}
        >
          <button>Carregar mais...</button>
        </div>
      </GamesContainer>

      <ChooseVideoGame />
        
      <Footer />
      
    </CategoriesContainer>    
  )  
}