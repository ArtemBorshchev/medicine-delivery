import React from "react";
import { decorateClickedElement, decorateFocusedLeavedElement } from "../usefullFunc/usefullFunc.js";

import { ReactComponent as HeartIcon } from "../iconFavorit.svg";

const FavoriteIcon = ({ opacitiColor, setOpacitiColor, clickedIcon, setClickedIcon, setLiked, id, name, image, price, added, liked }) => {
  const handleFavoriteClick = () => {
    if (liked && liked.length > 0) {
      const foundInLiked = liked.some(item => item.id === id);

      if (!foundInLiked) {
        const newLikedItem = { id, name, image, price, added, isLiked: true };
        setLiked(prevLiked => {
          const updatedLiked = [...prevLiked, newLikedItem];
          localStorage.setItem('liked', JSON.stringify(updatedLiked));
          return updatedLiked;
        });
      } else {
        setLiked(prevLiked => {
          const updatedLiked = prevLiked.filter(item => item.id !== id);
          localStorage.setItem('liked', JSON.stringify(updatedLiked));
          return updatedLiked;
        });
      }
    } else {
      const newLikedItem = { id, name, image, price, added, isLiked: true };
      setLiked([newLikedItem]);
      localStorage.setItem('liked', JSON.stringify([newLikedItem]));
    }

    decorateClickedElement(setOpacitiColor, setClickedIcon, clickedIcon);
  };

  return (
    <HeartIcon
      className="heart"
      fill="#29a745"
      opacity={opacitiColor}
      width="25px"
      height="25px"
      onClick={handleFavoriteClick}
      onMouseEnter={(e) => decorateFocusedLeavedElement(e, setOpacitiColor, clickedIcon)}
      onMouseLeave={(e) => decorateFocusedLeavedElement(e, setOpacitiColor, clickedIcon)}
    />
  );
};

export default FavoriteIcon;




// import React from "react";
// import {decorateClickedElement, decorateFocusedLeavedElement} from "../usefullFunc/usefullFunc.js"

// import {ReactComponent as HeartIcon} from "../iconFavorit.svg"

// const FavoriteIcon = ({opacitiColor, setOpacitiColor, clickedIcon, setClickedIcon, liked, setLiked, id, name, image, price, added }) => {
//   return (
//     <HeartIcon className="heart" fill="#29a745" opacity={opacitiColor} width="25px" height="25px"
//       onClick={() => decorateClickedElement(setOpacitiColor, setClickedIcon, clickedIcon)
//       } 
//       onMouseEnter={(e) => decorateFocusedLeavedElement(e, setOpacitiColor, clickedIcon)}
//       onMouseLeave={(e) => decorateFocusedLeavedElement(e, setOpacitiColor, clickedIcon)}
//     />
//   )
// }

// export default FavoriteIcon;