export interface ICardGamesData {
  developer: string;
  title: string;
  old_price: string | null;
  new_price: string;
  payment_conditions: string;
  poster: string;
  tag_title: string;
  tag_type: 'discount' | 'emphasis' | 'news' | 'lastUnits' | 'comingSoon' | string;
}