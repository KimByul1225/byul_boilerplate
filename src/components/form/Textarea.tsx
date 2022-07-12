import { ChangeEventHandler } from "react";
import { InputValue } from "@/mappings/types";

type Props = {
    value: InputValue;
    onChange?: ChangeEventHandler;
    name?: string;
    placeholder?: string;
    readOnly?: boolean;
    maxLength?: number;
    inputRef?: any;
    autoComplete?: string;
    rows?: number;
    cols?: number;
};

/**
 * @description Textarea 컴포넌트
 */
function Textarea({
    value,
    onChange,
    name,
    placeholder,
    readOnly,
    maxLength,
    autoComplete = "off",
    rows = 4,
    cols,
}: Props) {
    // view
    return (
        <textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            maxLength={maxLength}
            readOnly={readOnly}
            autoComplete={autoComplete}
            rows={rows}
            cols={cols}
        />
    );
}

export default Textarea;
