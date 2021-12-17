import React from 'react'

export default function GalleryImage(props) {
    return (
        <img
            className="gallery-image"
            src={"/images/" + props.imageName + ".jpg"}
            alt="imag"

        />
    )
}