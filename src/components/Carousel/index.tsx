import { Tag } from "../Tag";
import { CarouselContainer } from "./styles";

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
      <div className="games">
        {carouselData.map(item => (
          <div key={item.title} className="games-content">
            <div className="poster">
              <img src={item.poster} alt={item.title} />
              <Tag
                type={item.tag_type}
                title={item.tag_title}
              />
            </div>
            <span>
              <div className="top">
                <p className="developer">{item.developer}</p>
                <p className="title">{item.title}</p>
              </div>
              <div className="bottom">
                <p className="old-price">{item.old_price}</p>
                <p className="new-price">{item.new_price}</p>
                <p className="payment-conditions">{item.payment_conditions}</p>
              </div>
            </span>
          </div>
        ))}
      </div>
    </CarouselContainer>
  )  
}