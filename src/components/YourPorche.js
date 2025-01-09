import React from "react";
export default function YourPorche() {
   const category = [
    "Build Your Own",
    "Build Your Own",
    "Build Your Own",
    "Build Your Own",
    "Build Your Own",
    "Build Your Own",
    "E-Mobiliti & E-Performance"
   ];
  return (
    <div>
        <div>
            <button className="bg-black text-white p-3 mx-5 mt-3" >log in</button>
            <button className="border-2 border-amber-950 p-3 mt-3">discover more</button>
        </div>
        <div className='pt-16 pl-10'>
          {category.map((model) => {
             return <div className="pb-6 text-lg font-semibold">{model}</div>;
           })}
        </div>
    </div>
  )
}
