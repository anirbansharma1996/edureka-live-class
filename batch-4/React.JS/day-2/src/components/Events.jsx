import React from 'react'

export default function Events() {

   const handleAlert =()=>{
     alert('Clicked !!!!')
   }


  return (
    <div>
        <button onClick={handleAlert}>CLICK</button>
    </div>
  )
}
