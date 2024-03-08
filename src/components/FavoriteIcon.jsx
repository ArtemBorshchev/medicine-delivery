import React, { useState } from "react";
import {ReactComponent as HeartIcon} from '../iconFavorit.svg'

const FavoriteIcon = () => {
  const [color, setColor] = useState("green");
  const [clickedIcon, setClickedIcon] = useState(true);

  const changeColor = () => {
    if (clickedIcon) {
      setColor("red");
      setClickedIcon(!clickedIcon);
    }
    if (!clickedIcon) {
      setColor("green");
      setClickedIcon(!clickedIcon);
    }
  }
  return (
    <HeartIcon className="heart" fill={color} width="25px" height="25px" onClick={changeColor} />
  )
}

export default FavoriteIcon;