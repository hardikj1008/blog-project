import React from 'react'
import Navbar from '../Navbar'
import Card from '../UI/Cards'
import './style.css'


const Hero = (props)=>{
    return(
        <div>
         <Card >
             <div style={{padding :'50px'}}>
                 Hardik JAin
             </div>  
         </Card>
         <Navbar/>
        </div>
    );
}
export default Hero