import { CSSProp } from "styled-components";
import { TagContainer } from "./styles";

interface ITag {
  type: 'discount' | 'emphasis' | 'news' | 'lastUnits' | 'comingSoon' | string;
  title: string;
  styleProps?: CSSProp;
}

export function Tag({
  type,
  title,
  styleProps,
}:ITag) {
  return(
    <TagContainer type={type} styleProps={styleProps}>
      <p>{title}</p>
    </TagContainer>
  )
}