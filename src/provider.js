import React, {useState} from 'react'
import PackageContext from "./context"


const provider = (props) =>{
   const[cricketer, setCricketer] = useState({
       name = "Sachin",
       highestScore = 200,
       retired = "Retired"
   })
   return(
       <PackageContext.Provider
        value = {{
           data: cricketer,
           upsateHighScore: ()=>{
            setCricketer({...cricketer, highestScore: 210}) 
           }
        }}
       >

           {props.children}
       </PackageContext.Provider>
   )
}