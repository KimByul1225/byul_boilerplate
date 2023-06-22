import React from 'react'
import styled from '@emotion/styled';
import { ImageBoxProps } from '@/mappings/types';

function ImageBox({img}: ImageBoxProps) {
    return (
        <Wrap
            img={img}
        >
            ImageBox
        </Wrap>
    )
}

export default ImageBox

const Wrap = styled.div<ImageBoxProps>`
    border: 1px solid #000;
    width: 200px;
    height: 200px;
`