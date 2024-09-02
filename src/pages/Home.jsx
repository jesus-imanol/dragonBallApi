import { useEffect } from "react";
import { useState } from "react";
import Card from "../components/molecules/Card";
import '../components/molecules/Card.css'
function Home() {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        fetch('https://dragonball-api.com/api/characters')
        .then(response => {
            if(response.ok){
                return response.json()
            }
        })
        .then(data =>{
          setCharacters(data.items); 
        })
        .catch(error=> {
            console.log("Error" + error);
            
        })
        },[])
    
    return ( <>
    <section>
       {
        characters.map(cha =><Card name={cha.name} maxKi={cha.maxKi} gender={cha.gender} image={cha.image}/> )
       }
    </section>
    </> 
    );
}

export default Home;