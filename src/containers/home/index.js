import react from 'react'
import { Navbar } from '../../components/Navbar'
import './style.css'

class Home extends react.Component{
    render(){
        return(
            <div>
                <Navbar />
            </div>
        );
    }
}

export default Home