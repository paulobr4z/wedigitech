import { ICardGamesData } from "../../types";
import { Tag } from "../Tag";
import { CardContainer } from "./styles";

interface ICard {
  cardData: ICardGamesData;
}

export function Card({
  cardData
}: ICard) {
  return(
    <CardContainer>
      <div className="game">
        <div key={cardData.title} className="games-content">
          <div className="poster">
            <img src={cardData.poster} alt={cardData.title} />
            <Tag
              type={cardData.tag_type}
              title={cardData.tag_title}
            />
          </div>
          <span>
            <div className="top">
              <p className="developer">{cardData.developer}</p>
              <p className="title">{cardData.title}</p>
            </div>
            <div className="bottom">
              <p className="old-price">{cardData.old_price}</p>
              <p className="new-price">{cardData.new_price}</p>
              <p className="payment-conditions">{cardData.payment_conditions}</p>
            </div>
          </span>
        </div>
      </div>
    </CardContainer>
  )  
}