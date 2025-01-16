import React, { useEffect, useState } from "react";
import Shoping from "./Shoping";
import Models from "./Models";
import Exprinec from "./Exprinec"
import Service from "./Service"
import YourPorche from "./YourPorche";
import FindYour from "./FindYour";

export default function Menu({ setToggleMenu }) {

  const [categoryShow, setCategoryShow ] = useState('Models')

  const category = [
    "Models",
    "ShoppingTools",
    "Porsche Shop",
    "Services",
    "Experience",
    "Find Your Porsche Center",
    "My Porsche",
  ];

  const handleShow = () => {
      switch (categoryShow) {
        case "Models":
            return <Models />
          case "ShoppingTools":
              return <Shoping />
          case "Porsche Shop":
              return <div>porsche shop</div>
          case "Services":
              return <Service />
          case "Experience":
              return <Exprinec />
          case "Find Your Porsche Center":
              return <FindYour />
          case "My Porsche":
              return <YourPorche />
      }
  }

  const menuRef = React.useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setToggleMenu]); // Add dependency to avoid unnecessary re-renders

  return (
    <div className="w-[60vw] h-full absolute left-0 top-0 flex"ref={menuRef}>
      <div className="bg-slate-50 w-[50%] h-full flex flex-col gap-8 pt-10 items-center">
        {category.map((model, index) => (
          <div
            key={index} // Add a unique key
            onClick={() =>{
              setCategoryShow(model)}}
            className="hover:bg-gray-200 w-[80%]"
          >
            {model}
          </div>
        ))}
      </div>
      <div className="bg-gray-200 w-[50%] h-full overflow-scroll">
          {handleShow()}
      </div>
      <div
        className="p-4 text-2xl rounded-lg hover:bg-gray-200 w-10 h-10 flex justify-center items-center m-4"
        onClick={() => setToggleMenu(false)}
      >
        X
      </div>
    </div>
  );
}
