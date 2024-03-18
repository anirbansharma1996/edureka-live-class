import React,{useContext} from 'react'
import { TextContext } from '../context/TextContext'

export default function Home() {
   const text = useContext(TextContext)
 
  return (
    <div>Home : {text}</div>
  )
}
