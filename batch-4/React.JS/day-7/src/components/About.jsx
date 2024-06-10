import React,{useContext} from 'react'
import { TextContext } from '../context/TextContext'


export default function About() {
  const {text , count ,handleCount} = useContext(TextContext)

  return (
    <div>
      <h1>ABOUT &nbsp; {count}</h1>
      <button onClick={handleCount}>ABOUT COUNT</button>
      <p>{text}</p>
    </div>
  )
}
