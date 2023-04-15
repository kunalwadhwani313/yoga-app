import React, { useState ,useEffect } from 'react'

import { poseInstructions } from '../../utils/data'

import { poseImages } from '../../utils/pose_images'
import AnimatedText from 'react-animated-text-content';



import './Instructions.css'

export default function Instructions({ currentPose }) {

    

    useEffect(() => {
      console.log("Pose hit" , currentPose)
    }, [currentPose])
    

    const [instructions, setInsntructions] = useState(poseInstructions)

    return (
        <div className="instructions-container">

    <div className='textdiv'>
      <AnimatedText style = {{color: 'white' , fontWeight: 'bold' ,fontSize: '5rem'}}
          type="words" // animate words or chars
          animation={{
            x: '200px',
            y: '-20px',
            scale: 1.1,
            ease: 'ease-in-out',
          }}
          animationType="float"
          interval={0.06}
          duration={0.7}
          tag="p"
          className="animated-paragraph"
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="20%"
        >
        Rules To Follow
      </AnimatedText>
      </div>

            <ul className="instructions-list">
                {instructions[currentPose].map((instruction) => {
                    return(
                        <li className="instruction">{instruction}</li>
                    )
                    
                })}
            </ul>
            <div>

            
          
            </div>
           
        </div>
    )
}
