import { ChangeEventHandler } from "react";
import { InputValue } from "@/mappings/types";

type Props = {
    value: InputValue;
    onChange?: ChangeEventHandler;
    type?: string;
    name?: string;
    placeholder?: string;
    maxLength?: number;
    readOnly?: boolean;
    inputRef?: any;
    autoComplete?: string;
};

/**
 * @description Input 컴포넌트
 */
function Input({
    value,
    onChange,
    type,
    name,
    placeholder,
    maxLength,
    readOnly,
    inputRef,
    autoComplete = "off",
}: Props) {
    // view
    return (
        <input
            type={type}
            name={name}
            value={value || ""}
            onChange={onChange}
            placeholder={placeholder}
            maxLength={maxLength}
            readOnly={readOnly}
            ref={inputRef}
            autoComplete={autoComplete}
        />
    );
}

export default Input;
