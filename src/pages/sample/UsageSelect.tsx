import { useState, useEffect } from "react";

import { SelectChange, Option } from "@/mappings/types";
import Select from "@/components/form/Select";

/**
 * @description Select 컴포넌트 사용법
 */
function UsageSelect() {
    // state
    const [value, setValue] = useState<any>("");
    const [options, setOptions] = useState<Option[]>([]);

    // event
    const onSelect = (e: SelectChange) => setValue(e.target.value);

    // watch
    useEffect(() => {
        setOptions([
            { value: "abc", text: "string" },
            { value: 123, text: "number" },
            { value: true, text: "boolean" },
            { value: { key: "value" }, text: "object" },
            { value: [0, 0, 0, 0, 0], text: "array" },
        ]);
    }, []);

    useEffect(() => {
        console.log(typeof value, value);
    }, [value]);

    // view
    return <Select value={value} options={options} onSelect={onSelect} />;
}

export default UsageSelect;
