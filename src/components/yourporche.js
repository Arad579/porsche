import React from "react";
<div>
    <button className="bg-black" >log in</button>
    <button>discover more</button>
</div>
    export default function Shoping() {
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
        <div className='pt-16 pl-10'>
          {category.map((model) => {
         return <div className="pb-6 text-lg font-semibold">{model}</div>;
           })}
        </div>
    </div>
  )
}