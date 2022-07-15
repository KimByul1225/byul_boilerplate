import { useState } from "react";
import Checkbox from "@/components/form/Checkbox";

type Props = {
    label: string;
    checked: boolean;
};

/**
 * @description Checkbox 컴포넌트 사용법
 */
function UsageCheckbox() {
    // state
    const [checkList, setCheckList] = useState<Props[]>([
        { label: "Front-End", checked: false },
        { label: "Back-End", checked: false },
        { label: "DevOps", checked: false },
    ]);

    // event
    const onCheck = (index: number) => {
        setCheckList((prevState) => {
            return prevState.map((item, idx) =>
                idx === index ? { ...item, checked: !item.checked } : item
            );
        });
    };

    // view
    return (
        <>
            {checkList.map(({ label, checked }, index) => (
                <Checkbox
                    key={index.toString()}
                    label={label}
                    checked={checked}
                    onCheck={() => onCheck(index)}
                />
            ))}
        </>
    );
}

export default UsageCheckbox;
