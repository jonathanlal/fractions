import Link from "next/link";
import React from "react";

export const DefaultBtn = React.forwardRef(({ onClickFn, href, text }, ref) => {
  const onClickAction = (e) => {
    e.preventDefault();
    onClickFn();
  };

  return (
    <Link href={href} passHref>
      <a href={href} onClick={(e) => onClickAction(e)} ref={ref}>
        {text}
      </a>
    </Link>
  );
});
