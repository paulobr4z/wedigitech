import { ButtonPrimary } from "../../components/ButtonPrimary";
import { Carousel } from "../../components/Carousel";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { HighlightsWeekData, platformsData } from "../../constants/home";
import { 
  ComingSoon,
  HomeBanner,
  HomeContainer,
  OtherHighlights,
  SearchByPlatform
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <HomeBanner>
        <div className="left-content">
          <h1>Red Dead Redemption II</h1>
          <p>
            Já disponível para <strong>PlayStation</strong> e <strong>PC</strong>
          </p>
          <ButtonPrimary
            textButton="Comprar"
            typeButton="large"
          />
        </div>
        <div className="right-content">
          <img src="/assets/img/rdr2_logo.png" alt="red dead redemption 2 logo" />
        </div>
      </HomeBanner>
      <Carousel
        title="Destaques da Semana"
        carouselData={HighlightsWeekData}
      />
      <SearchByPlatform>
        <h3>Busque por plataforma</h3>
        <div className="platforms-content" >
          {platformsData.map(platform => (
            <div className="platform" key={platform.title}>
              <h4>{platform.title}</h4>
              <img src={platform.image} alt={platform.title} />
            </div>
          ))}
        </div>
      </SearchByPlatform>
      <ComingSoon>
        <div className="coming-soon-wrapper">
          <img src="/assets/img/coming_soon.png" alt="" />
          <Tag
            type="comingSoon"
            title="Em breve"
          />
          <span>
            <h1>Vem aí em Outubro</h1>
            <h2>Far Cry 6</h2>
            <p>para Xbox One, PS4 e PC</p>
            <ButtonPrimary
              textButton="Reservar"
              typeButton="large"
            />
          </span>
        </div>
      </ComingSoon>
      <Carousel
        title="Em alta"
        carouselData={HighlightsWeekData}
      />
      <OtherHighlights>
        <div className="mario">
          <div className="other-highlights-content">
            <h2>Sessão Nostalgia</h2>
            <p>Encontre os jogos favoritos da sua infância.</p>
            <ButtonPrimary
              textButton="Saiba mais"
              typeButton="medium"
            />
          </div>
        </div>
        <div className="fifa">
          <div className="other-highlights-content">
            <h2>No clima das Olimpíadas</h2>
            <p>Os melhores jogos esportivos estão aqui.</p>
            <ButtonPrimary
              textButton="Saiba mais"
              typeButton="medium"
            />
          </div>
        </div>
      </OtherHighlights>
      <Carousel
        title="Aproveite nossas promoções"
        carouselData={HighlightsWeekData}
      />
      <Footer />
    </HomeContainer>    
  )  
}