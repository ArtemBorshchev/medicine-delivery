import React, { useState } from "react";
import {ReactComponent as HeartIcon} from "../iconFavorit.svg"

const FavoriteIcon = () => {
  const [opacitiColor, setOpacitiColor] = useState('0.2');
  const [clickedIcon, setClickedIcon] = useState(false);

  const enterFavorite = () => {
    if (!clickedIcon) {
      console.log("click ON")
      setOpacitiColor("1");
      setClickedIcon(!clickedIcon);
    }
    if (clickedIcon) {
      setOpacitiColor("0.2");
      setClickedIcon(!clickedIcon);
    }
  }
  const focusLeaveFavorite = (e) => {
    if (!clickedIcon) {
      switch (e.type) {
        case "mouseenter":
          setOpacitiColor(1);
          break;
        case "mouseleave":
          setOpacitiColor(0.2);
          break;
        default:
          break;
      }
    }
  };

  return (
    <HeartIcon className="heart" fill="#29a745" opacity={opacitiColor} 
    width="25px" height="25px" 
    onClick={enterFavorite} 
    onMouseEnter={focusLeaveFavorite}
    onMouseLeave={focusLeaveFavorite}/>
  )
}

export default FavoriteIcon;