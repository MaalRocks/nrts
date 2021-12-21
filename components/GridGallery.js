import React from 'react'
import styles from 'C:/Users/Lono/Desktop/React/nrts/styles/GridGallery.module.sass'
import GalleryImage from '../components/GalleryImage';

let imageArray = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
]

function GalleryImageFrame(props) {
    return (
        <div className="gallery-image-frame">
            <GalleryImage imageName={props.imageName} />
        </div>
    )
}

export default function GridGallery() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.gridGallery}>
                {imageArray.map((galleryImage) => <GalleryImageFrame key={galleryImage} imageName={galleryImage} />)}
            </div>

        </div>
    )
}


