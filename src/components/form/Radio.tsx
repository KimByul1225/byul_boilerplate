import { useRef, ChangeEventHandler, ReactNode } from "react";

type Props = {
    children: ReactNode;
    value: string;
    name?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    onChange: ChangeEventHandler;
};

/**
 * @description Radio 컴포넌트
 */
function Radio({
    children,
    value,
    name,
    defaultChecked,
    disabled,
    readonly,
    onChange,
}: Props) {
    // reference
    const radioRef = useRef<HTMLInputElement>(null);

    // event
    const onClick = () => {
        radioRef.current?.click();
    };

    // view
    return (
        <>
            <input
                type="radio"
                name={name}
                value={value}
                onChange={onChange}
                defaultChecked={defaultChecked}
                disabled={disabled}
                readOnly={readonly}
                ref={radioRef}
            />
            <label onClick={onClick}>{children}</label>
        </>
    );
}

export default Radio;
