import React from 'react'
import styles from '../styles/GridGallery.module.sass'
import Image from '../components/Image'

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
        <div className="">
            <Image folder="gallery" imageName={props.imageName} />
        </div>
    )
}

export default function GridGallery() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.gridGallery}>
                {imageArray.map((Image) => <GalleryImageFrame key={Image} imageName={Image} />)}
            </div>

        </div>
    )
}


