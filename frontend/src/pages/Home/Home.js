import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import video from '../../assests/video.mp4'

import './Home.css'



const Home = () => {
   
    const [hover, setHover] =useState(false)

    const myStyle = {
        color: hover ? 'black' : 'white',
        textDecoration: "none",
        transition : 3,
        margin:"2px"
    }

    const handleMouseEnter = () => {
        setHover(true);
      };
    
      const handleMouseLeave = () => {
        setHover(false);
      };
  
    return (
      <div className='main1'>
          <div className="overlay"></div>
          <video className='video1' src={video} autoPlay loop muted />
          <div className="content">
              <h1></h1>
              <p className='text'>Welcome to AIक्यम</p>
              <p className='buttons'>
                
                    <Link to="/start"  style={myStyle} 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <button className='btn41-43 btn-41'>  Let's Start
                    </button>
                    </Link>
    
                
                    <Link to ="/tutorials" style={myStyle} 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                        <button className='btn41-43 btn-41'>Tutorials
                        </button>
                      </Link>
                        
                     <Link to ="/about" style={myStyle} 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                        <button className='btn41-43 btn-41'>About
                        </button>
                    </Link>
                
               </p>
          </div>
      </div>
      
    )
  }
  
  export default Home