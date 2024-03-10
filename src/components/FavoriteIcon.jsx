import React from "react";
import {decorateClickedElement, decorateFocusedLeavedElement} from "../usefullFunc/usefullFunc.js"

import {ReactComponent as HeartIcon} from "../iconFavorit.svg"

const FavoriteIcon = ({opacitiColor, setOpacitiColor, clickedIcon, setClickedIcon}) => {

  return (
    <HeartIcon className="heart" fill="#29a745" opacity={opacitiColor} width="25px" height="25px"
      onClick={() => decorateClickedElement(setOpacitiColor, setClickedIcon, clickedIcon)} 
      onMouseEnter={(e) => decorateFocusedLeavedElement(e, setOpacitiColor, clickedIcon)}
      onMouseLeave={(e) => decorateFocusedLeavedElement(e, setOpacitiColor, clickedIcon)}
    />
  )
}

export default FavoriteIcon;