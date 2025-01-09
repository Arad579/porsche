import React, { useEffect, useState } from "react";
import Shoping from "./Shoping";
import Models from "./Models";

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

  const handleShow = (cat) => {
      switch (cat) {
        case Models:
            return <Models />
      
        default:
          break;
      }
  }

  const handleClickCategory = (model) => {
    // Debugging log
    console.log(model);
    setCategoryShow(model)
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
              handleClickCategory(model)}}
            className="hover:bg-gray-200 w-[80%]"
          >
            {model}
          </div>
        ))}
      </div>
      <div className="bg-gray-200 w-[50%] h-full overflow-scroll">
        {handleShow(category)}
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
