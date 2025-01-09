import React from "react";
import Menu from "./Menu";


export default function Navbar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className="flex justify-between px-10 pt-5">
      <div className="cursor-pointer"
      onClick={() => setToggleMenu(true)}>menu</div>
      <div>porsche</div>
      <div className="opacity-0">adamak</div>
      {toggleMenu ? <Menu setToggleMenu={() => setToggleMenu()} /> : ""}
    </div>
  );
}
