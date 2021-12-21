import React from 'react'

export default function Image(props) {
    return (
        <img
            className=""
            src={"/" + props.folder + "/" + props.imageName + ".jpg"}
            alt="imags"

        />
    )
}
