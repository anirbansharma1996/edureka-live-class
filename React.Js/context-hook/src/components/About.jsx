import React,{useContext} from 'react'
import { TextContext } from '../context/TextContext'
export default function About() {
   const text = useContext(TextContext)


  return (
    <div>About : {text}</div>
  )
}
