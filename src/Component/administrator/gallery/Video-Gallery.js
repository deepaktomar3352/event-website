import React from "react";
import { useState,createRef } from "react";
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import './react-video-gallery.css';
import { serverURL,getData,postData } from "../../../Services/ServerServices";
import video from '../gallery/videos/video.mp4'

const VideoGallery=()=>{
    const [model,setModel] = useState(false)

   let data = [
    
  
    {
        id:6,
        videoUrl:'videos.mp4'
    },
    {
        id:2,
        videoUrl:'video2.mp4'
    },
    {
        id:3,
        videoUrl:'video3.mp4'
    },
    {
        id:4,
        videoUrl:'video4.mp4'
    },
    {
        id:5,
        videoUrl:'../gallery/videos/video.mp4'
    },
   ]

    return(
        <div>
            <h1 style={{textAlign:'center'}}>video Gallery</h1>
            
            <div className="vgallery">
              
            { data.map((item,index)=>{
                console.log(item)
                let divRef = createRef(null);
                const openModel =()=>{
                    divRef.current.classList.remove('video')
                    divRef.current.classList.add('model')
                    setModel(true)
                }
                const closeModel =()=>{
                    divRef.current.classList.add('video')
                    divRef.current.classList.remove('model')
                    setModel(false)
                }
                  return(
                    <div ref={divRef} className="video" key={index}>
                        {model && <button className="model-close-btn" onClick={()=>closeModel()}>x</button>}
                        <div className="video-container" onClick={()=>openModel()}>
                <Video
                style={{width:'100%'}}
                controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                autoPlay={model}
                >
                
                  <source src={item.videoUrl}type="mp4/webm"/>
                </Video>
                </div></div>)
            })}
            </div>
        </div>
    )
    return (
        <Video autoPlay loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster="http://sourceposter.jpg"
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src="http://sourcefile.webm" type="video/webm" />
            <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
        </Video>
    );

}

export default VideoGallery;