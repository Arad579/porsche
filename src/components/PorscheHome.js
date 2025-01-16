import React from "react";
import posche from '../images/porsche-model.png'

function PorscheHome() {
  return (
<div className="flex flex-col justify-center items-center my-20">
    <h1 className="text-5xl">911 gt3 rs</h1>
    <div className="w-full flex justify-center"><img alt="true" className="w-[50%]" src={posche}/></div>
    <div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className="w-full flex justify-center gap-4">
        {["technical specs >", "build your own >" , "compare >","contact us >"].map((btnp) => {
            return(
            <button className="p-3 border-2">{btnp}</button>
            )

        })}
    </div>
</div>
  )
}

export default PorscheHome
