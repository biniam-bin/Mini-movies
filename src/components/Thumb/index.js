import React from 'react';
import {Image} from "./Thumb.styles";
import {Link} from "react-router-dom";

function Thumb({image, movieId, clickable}) {
    return (
        <>
            {
                clickable ? (
                    <Link to={`/${movieId}`}>
                       <Image src={image}/>
                    </Link>
                ) : <Image src={image}/>
            }
            
        </>
    )
}

export default Thumb
