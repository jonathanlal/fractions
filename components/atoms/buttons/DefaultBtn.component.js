import Link from "next/link";
import React from "react";
import { StyledDefaultBtn } from "./DefaultBtn.styles";

export const DefaultBtn = React.forwardRef(({ onClickFn, href, text }, ref) => {
  const onClickAction = (e) => {
    e.preventDefault();
    onClickFn();
  };

  return (
    <StyledDefaultBtn className="primary-button">
      <Link href={href} passHref>
        <a href={href} onClick={(e) => onClickAction(e)} ref={ref}>
          {text}
        </a>
      </Link>
    </StyledDefaultBtn>
  );
});
