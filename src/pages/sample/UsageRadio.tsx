import { InputChange } from "@/mappings/types";
import Radio from "@/components/form/Radio";

/**
 * @description Checkbox 컴포넌트 사용법
 */
function UsageRadio() {
    // event
    const onChange = (e: InputChange) => {
        console.log(e.target.value);
    };

    // view
    return (
        <>
            <Radio name="contact" value="EMAIL" onChange={onChange} defaultChecked>
                &nbsp; 이메일 &nbsp;
            </Radio>
            <Radio name="contact" value="PHONE" onChange={onChange}>
                &nbsp; 전화 &nbsp;
            </Radio>
            <Radio name="contact" value="FAX" onChange={onChange}>
                &nbsp; 팩스 &nbsp;
            </Radio>
            <Radio name="contact" value="MAIL" onChange={onChange} disabled>
                &nbsp; 우편 &nbsp;
            </Radio>
        </>
    );
}

export default UsageRadio;
