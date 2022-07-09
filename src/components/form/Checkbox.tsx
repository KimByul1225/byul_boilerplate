import { useRef, ChangeEventHandler } from "react";

type Props = {
    label?: string;
    name?: string;
    checked: boolean;
    onCheck?: ChangeEventHandler;
};

/**
 * @description Checkbox 컴포넌트
 */
function CheckBox({ label, name, checked = false, onCheck }: Props) {
    // reference
    const checkboxRef = useRef<HTMLInputElement>(null);

    // event
    const onClick = () => {
        checkboxRef.current?.click();
    };

    // view
    return (
        <div>
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onCheck}
                ref={checkboxRef}
            />
            <label onClick={onClick}>&nbsp; {label}</label>
        </div>
    );
}

export default CheckBox;
