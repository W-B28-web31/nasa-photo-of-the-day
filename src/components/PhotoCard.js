import React from "react";


const PhotoCard = props => {
    console.log(props)
    return (
        <div>
           <img src={props.image} />
        </div>
    )
}

export default PhotoCard
