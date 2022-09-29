import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

export default function Creature() {
    

    const [creature,setCreature] = useState([])

    const fetchCreatures = async()=>{


        try {
            
            const response = await fetch("https://eldenring.fanapis.com/api/creatures/");
            if (!response.ok) throw new Error(response.statusText);
            const responseJson = await response.json();
            setCreature(responseJson.data)
            } catch(e) {
            console.error(e.message);
            
            }
    }

    useEffect(()=>{
        fetchCreatures()
    },[])

  return (
    <div>
        
    </div>

  )
}
