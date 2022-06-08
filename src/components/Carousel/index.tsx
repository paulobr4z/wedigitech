import { Tag } from "../Tag";
import { CarouselContainer } from "./styles";
import { Card } from "../Card";

interface ICarouselData {
  developer: string;
  title: string;
  old_price: string | null;
  new_price: string;
  payment_conditions: string;
  poster: string;
  tag_title: string;
  tag_type: 'discount' | 'emphasis' | 'news' | 'lastUnits' | 'comingSoon' | string;
}

interface ICarousel {
  title: string;
  carouselData: ICarouselData[];
}

export function Carousel({
  title,
  carouselData,
}: ICarousel) {
  return(
    <CarouselContainer>
      <div className="title-and-control">
        <h3>{title}</h3>
        <span>
          <img src="/assets/icons/nav-left.svg" alt="left" />
          <img src="/assets/icons/nav-right.svg" alt="right" />
        </span>
      </div>
      <div className="card">
        {carouselData.map(item => (
          <Card cardData={item} key={item.title} />
        ))}
      </div>
    </CarouselContainer>
  )  
}