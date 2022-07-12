import Calendar from "@/components/form/Calendar";

/**
 * @description Calendar 컴포넌트 사용법
 */
function UsageCalendar() {
    // event
    const onChange = (date: Date) => console.log(date);

    // view
    return <Calendar onChange={onChange} />;
}

export default UsageCalendar;
