import DatePicker, { registerLocale } from "react-datepicker";
import { useState } from "react";

import { add, endOfYear, startOfYear, sub } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";

type DateOption = {
    label: string;
    value: number;
};

type Props = {
    onChange: (date: Date) => void;
    selected?: Date;
};

/**
 * @description React-DatePicker
 */
function Calendar({ onChange, selected }: Props) {
    // state
    const [currentDate, setCurrentDate] = useState(new Date());

    // variable
    const startYear = new Date().getFullYear() - 5;
    const endYear = new Date().getFullYear() + 5;

    const years: DateOption[] = new Array(endYear - startYear + 1)
        .fill(startYear)
        .map((value, index) => ({
            label: value + index,
            value: value + index,
        }));

    const months: DateOption[] = new Array(12).fill(1).map((value, index) => ({
        label: `${value + index}월`,
        value: value + index - 1,
    }));

    // [date-picker]에 한글 적용
    registerLocale("ko", ko);

    // view
    return (
        <DatePicker
            locale="ko"
            dateFormat="yyyy-MM-dd (eee)"
            renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
            }) => (
                <div
                    style={{
                        margin: 10,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <button
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                    >
                        {"<"}
                    </button>
                    <select
                        value={date.getFullYear()}
                        onChange={({ target: { value } }) =>
                            changeYear(Number(value))
                        }
                    >
                        {years.map(({ label, value }, index) => (
                            <option key={index.toString()} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>

                    <select
                        value={date.getMonth()}
                        onChange={({ target: { value } }) =>
                            changeMonth(Number(value))
                        }
                    >
                        {months.map(({ label, value }, index) => (
                            <option key={index.toString()} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>

                    <button
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                    >
                        {">"}
                    </button>
                </div>
            )}
            selected={selected ?? currentDate}
            onChange={(date: Date) => {
                setCurrentDate(date);
                onChange(date);
            }}
            minDate={startOfYear(sub(new Date(), { years: 5 }))}
            maxDate={endOfYear(add(new Date(), { years: 5 }))}
        />
    );
}

export default Calendar;
