export const decorateClickedElement = (setOpacitiColor, setClickedIcon, clickedIcon) => {
  if (!clickedIcon) {
    setOpacitiColor("1");
    setClickedIcon(!clickedIcon);
  }
  if (clickedIcon) {
    setOpacitiColor("0.2");
    setClickedIcon(!clickedIcon);
  }
}
export const decorateFocusedLeavedElement = (e, setOpacitiColor, clickedIcon) => {
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