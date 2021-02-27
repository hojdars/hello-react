import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const ImageContainer = styled.div`
img {
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 4px solid #5995DA;
}
`

const SingleImage = (props) => {
    return (
        <div
            css={css`
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 50%;
            padding-top: 10px;
            padding-bottom: 10px;
        `}>

            <ImageContainer>
                <img src={props.image} alt={props.description} />
            </ImageContainer>

            <div
                css={css`
                text-align: center;
                padding-top: 5px;
                font-size: 18px;
                font-style: italic;
            `}>
                {props.description}
            </div>
        </div>
    )
}

const MultipleImages = (props) => {
    return (
        <div
            css={css`
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 50%;
            padding-top: 10px;
            padding-bottom: 10px;
        `}>

            {/* TODO: Implement multiple images */}
            <ImageContainer>
                <img src={props.image} alt={props.description} />
            </ImageContainer>

            <div
                css={css`
                text-align: center;
                padding-top: 5px;
                font-size: 18px;
                font-style: italic;
            `}>
                {props.description}
            </div>
        </div>
    )
}

const PhotoCapsule = (props) => {
    const numberOfImages = props.images.length;

    if (numberOfImages < 1) {
        console.error("Images can't be empty or negative!")
        return;
    } else if (numberOfImages === 1) {
        return SingleImage(props);
    } else {
        return MultipleImages(props);
    }
}

export default PhotoCapsule