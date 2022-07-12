import { ChangeEventHandler } from "react";

type Props = {
    name?: string;
    value: any;
    options: any[];
    onSelect?: ChangeEventHandler;
    selectRef?: any;
    multiple?: boolean;
};

/**
 * @description Select 컴포넌트
 */
function Select({
    name,
    value,
    options,
    onSelect,
    selectRef,
    multiple = false,
}: Props) {
    // view
    return (
        <select
            name={name}
            value={value}
            onChange={onSelect}
            ref={selectRef}
            multiple={multiple}
        >
            <option disabled value="">
                Select your option
            </option>
            {options.map((option, index) => (
                <option key={index.toString()} value={option.value}>
                    {option.text}
                </option>
            ))}
        </select>
    );
}

export default Select;
