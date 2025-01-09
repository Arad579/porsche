import React from 'react'
import posche from '../images/porsche-model.png'
export default function Models() {
    const category = [
        {
            name:'718',
            src:posche,
            fuel:'gasoline'
        },
        {
            name:'911',
            src:'',
            fuel:'gasoline'
        },
        {
            name:'Taycan',
            src:'',
            fuel:'Electric'
        },
        {
            name:'718',
            src:'',
            fuel:'gasoline'
        },
        {
            name:'718',
            src:'',
            fuel:'gasoline'
        },
        {
            name:'718',
            src:'',
            fuel:'gasoline'
        },
        {
            name:'718',
            src:'',
            fuel:'gasoline'
        },
    ]
  return (
    <div>
        {category.map((model) => {
            return (
            <div>
                <div>{model.name}</div>
                <img src={posche} />
                <div>{model.fuel}</div>
            </div>
            )
        })}
    </div>
  )
}
