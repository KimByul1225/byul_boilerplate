import React from 'react'
import styled from '@emotion/styled';
import { ImageBoxProps } from '@/mappings/types';

function ImageBox({img}: ImageBoxProps) {
    return (
        <Wrap
            img={img}
        >
        </Wrap>
    )
}

export default ImageBox

const Wrap = styled.div<ImageBoxProps>`
    width: 600px;
    height: 400px;
    background: url(${(props) => props.img}) center no-repeat;
    background-size: cover;
`