import React from "react";

export default function FindYour() {
   return (
       <div className="flex items-center justify-center flex-col mt-16 gap-2">
           <input></input>
           <div>or</div>
           <button className="hover:bg-gray-500 p-3 rounded-2xl ml-5" >use current location</button>
       </div>
   )
}
