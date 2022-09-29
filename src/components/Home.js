import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


export default function Home() {

    const [creatures,setCreatures] = useState([])

    

    const fetchCreatures = async()=>{

        


        try {
            const response = await fetch("https://eldenring.fanapis.com/api/creatures");
            if (!response.ok) throw new Error(response.statusText);
            const responseJson = await response.json();
            setCreatures(responseJson.data)
            } catch(e) {
            console.error(e.message);
            }
    }

    useEffect(()=>{
        fetchCreatures()
    },[])

  return (
    <div>
        
        {creatures.map((creature)=>(
            <h2>{creature.name}</h2>
        ))}
    </div>
  )
}


