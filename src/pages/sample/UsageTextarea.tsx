import { useState } from "react";

import Textarea from "@/components/form/Textarea";
import { InputChange } from "@/mappings/types";

/**
 * @description Textarea 컴포넌트 사용법
 */
function UsageTextarea() {
    // state
    const [value, setValue] = useState<string>("");

    // event
    const onChange = (e: InputChange) => setValue(e.target.value);

    // view
    return (
        <Textarea placeholder="입력하세요" value={value} onChange={onChange} />
    );
}

export default UsageTextarea;
