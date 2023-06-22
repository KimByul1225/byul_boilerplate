import React from "react";

import ImageBox from "@/components/layout/ImageBox";

import sampleImage from "@/img/sample01.jpg";


/**
 * @description 메인페이지 내용
 */
function Home() {
    return (
        <>
            <h1 className="Auth-form-container">
                Home
            </h1>
            <ImageBox
                img="ddd"
            />
        </>
        
    );
}

export default Home;