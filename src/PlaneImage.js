import React from 'react'

export default function PlaneImage(props) {
    const planeImage = props.PlaneImage;

    return (    
        <div class="project">
            <img src={ planeImage } alt="img" width="100%"></img>
        </div>
    )
}
