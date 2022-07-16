import FileUpload from "@/components/form/FileUpload";
import { InputChange } from "@/mappings/types";

/**
 * @description File Upload 컴포넌트 사용법
 */
function UsageFileUpload() {
    // event
    const onUpload = (e: InputChange) => {
        const { files } = e.target;
        console.log(files);
    };

    // view
    return <FileUpload text="파일 업로드" onUpload={onUpload} multiple />;
}

export default UsageFileUpload;
