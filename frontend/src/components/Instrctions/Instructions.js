import React, { useState ,useEffect } from 'react'

import { poseInstructions } from '../../utils/data'

import { poseImages } from '../../utils/pose_images'

import { fetchData , options2 } from '../../fetchData/fetchData'

import './Instructions.css'

export default function Instructions({ currentPose }) {

    const [youtubeVideos, setYoutubeVideos] = useState([]);

    useEffect(() => {

        const SearchVideo = async () => {
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${currentPose} pose yoga` , options2);
            console.log(exerciseVideosData)
            setYoutubeVideos(exerciseVideosData.contents);
        }
      console.log("Pose hit" , currentPose)
      SearchVideo()
     
        console.log(youtubeVideos)
      

    }, [currentPose])
    

    const [instructions, setInsntructions] = useState(poseInstructions)

    return (
        <div className="instructions-container">
            <ul className="instructions-list">
                {instructions[currentPose].map((instruction) => {
                    return(
                        <li className="instruction">{instruction}</li>
                    )
                    
                })}
            </ul>
            <div>

            {/* <img 
                className="pose-demo-img"
                src={poseImages[currentPose]}
            /> */}
            <div className="parent">
            {youtubeVideos?.slice(0 , 6).map(
          (item ,index) => (
            <div className="child" key={index} >
            <a
             href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            >
              <img className='thumbnail' src={item.video.thumbnails[0].url} alt={item.video.title} height="200px" width="250px"/>
              <div className='caption'>{item.video.title}</div>
            </a>
            </div>
          ))}
          </div>
            </div>
           
        </div>
    )
}
