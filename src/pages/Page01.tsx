import ImageBox from "@/components/layout/ImageBox";
import sample02 from "@/images/sample02.jpg";

/**
 * @description 샘플 페이지 01
 */
function Page01() {
    return (
        <>
            <h1 className="Auth-form-container">
                Page01
            </h1>
            <ImageBox
                img={sample02}
            />
        </>
        
    )
}
export default Page01;