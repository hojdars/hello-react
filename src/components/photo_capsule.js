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
                <img src={props.images[0]} alt={props.descriptions[0]} />
            </ImageContainer>

            <div
                css={css`
                text-align: center;
                padding-top: 5px;
                font-size: 18px;
                font-style: italic;
            `}>
                {props.descriptions[0]}
            </div>
        </div>
    )
}

// TODO: Styling this better

const ImageDescription = styled.div`
text-align: center;
padding-top: 5px;
font-size: 18px;
font-style: italic;
`

const ImagesContainer = styled.div`
display: block;
margin-left: auto;
margin-right: auto;
width: 50%;
padding-top: 10px;
padding-bottom: 10px;
`

const MultipleImages = (props) => {
    let result = [];

    props.images.forEach((image, index) => {
        const description = props.descriptions[index];
        result.push(<ImageContainer key={image}><img src={image} alt={description} /></ImageContainer>)
        result.push(<ImageDescription key={description}>{description}</ImageDescription>)
    });

    return (
        <ImagesContainer>{result}</ImagesContainer>
    );
}

const PhotoCapsule = (props) => {
    const numberOfImages = props.images.length;
    const numberOfDescriptions = props.descriptions.length;

    if (!(numberOfImages === numberOfDescriptions)) {
        console.error("Different amount of images and descriptions!")
        return;
    }

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