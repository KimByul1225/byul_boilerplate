import { useState } from "react";

import { InputChange } from "@/mappings/types";
import Input from "@/components/form/Input";

/**
 * @description Input 컴포넌트 사용법
 */
function UsageInput() {
    // state
    const [value, setValue] = useState<string>("");

    // event
    const onChange = (e: InputChange) => setValue(e.target.value);

    // view
    return <Input placeholder="입력하세요" value={value} onChange={onChange} />;
}

export default UsageInput;
