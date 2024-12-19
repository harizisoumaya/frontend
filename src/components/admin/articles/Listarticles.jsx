import axios from 'axios'
import React, { useState } from 'react'

const Listarticles = () => {
  const [articles,setArticles]=useState([])
  const fetcharticles=async()=>{
    try{
        const res=await axios.get("https://backend-ecommerce-one-bay.vercel.app/api/")
       console.log(res)

    }catch{
      console.log(error);

    }
  }
  return (
    <div>
      <button onClick={()=>fetcharticles()}>Afficher</button>
      <h1> Liste des articles</h1>
    </div>
  )
}

export default Listarticles;