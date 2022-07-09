import { useRef, ChangeEventHandler } from "react";

type Props = {
    text: string;
    onUpload: ChangeEventHandler;
    multiple?: boolean;
};

/**
 * @description File Upload 컴포넌트
 */
function FileUpload({ text = "File Upload", onUpload, multiple }: Props) {
    // reference
    const fileUploadRef = useRef<HTMLInputElement>(null);

    // event
    const onClick = () => {
        fileUploadRef.current?.click();
    };

    // view
    return (
        <>
            <input
                type="file"
                onChange={onUpload}
                multiple={multiple}
                style={{ display: "none" }}
                ref={fileUploadRef}
            />
            <button onClick={onClick}>{text}</button>
        </>
    );
}

export default FileUpload;
