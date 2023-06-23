import ImageBox from "@/components/layout/ImageBox";
import sample01 from "@/images/sample01.jpg";


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
                img={sample01}
            />
        </>
        
    );
}

export default Home;