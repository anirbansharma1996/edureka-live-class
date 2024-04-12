import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../connection/baseurl'
import RecipeCard from './RecipeCard'

export default function Recipe() {
  const {name} = useParams()
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/search.php?s=${name}`);
        setData(res.data.meals)
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);


  return (
    <section>
      <h3 style={{textAlign:"center"}}>Recipe for : {name}</h3>
      <RecipeCard props={data}/>
    </section>
  )
}
