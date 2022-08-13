import React from 'react'

export default function PlaneImage(props) {
    const planeImage = props.PlaneImage;

    return (    
        <div className="project">
            <img src={ planeImage } alt="img" width="100%"></img>
        </div>
    )
}
