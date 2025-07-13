import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState, useMemo, useRef, useEffect } from "react";
import styles from "./DateSelector.module.css";
const colorMap = {
    momo: "#fbd7d5",
    boro: "#FEE888",
    lumi: "#A7E1B6",
    zuni: "#93D1E0",
};
const DateSelector = ({ viewType, items, initialDate, onChange, userCharacter, }) => {
    const [year, setYear] = useState(initialDate.slice(0, 4));
    const [month, setMonth] = useState(initialDate.slice(5, 7));
    const [day, setDay] = useState(viewType === "polaroid" ? initialDate.slice(8, 10) : "");
    const years = useMemo(() => Array.from(new Set(items.map((i) => i.date.slice(0, 4)))).sort(), [items]);
    const months = useMemo(() => Array.from(new Set(items
        .filter((i) => i.date.startsWith(year))
        .map((i) => i.date.slice(5, 7)))).sort(), [items, year]);
    const days = useMemo(() => viewType === "polaroid"
        ? Array.from(new Set(items
            .filter((i) => i.date.startsWith(`${year}-${month}`))
            .map((i) => i.date.slice(8, 10)))).sort()
        : [], [items, viewType, year, month]);
    const yearCol = useRef(null);
    const monthCol = useRef(null);
    const dayCol = useRef(null);
    const onScroll = (el, options, setter) => {
        const { scrollTop, clientHeight } = el;
        // 옵션 높이가 모두 동일하다고 가정 (예: 40px)
        const itemHeight = 40;
        // 중앙 y좌표 = scrollTop + clientHeight/2
        const centerY = scrollTop + clientHeight / 2;
        // 인덱스 계산
        const idx = Math.round(centerY / itemHeight) - 1;
        const clamped = Math.min(Math.max(idx, 0), options.length - 1);
        const value = options[clamped];
        setter(value);
    };
    useEffect(() => {
        const yC = yearCol.current, mC = monthCol.current, dC = dayCol.current;
        if (yC)
            yC.addEventListener("scroll", () => onScroll(yC, years, setYear));
        if (mC)
            mC.addEventListener("scroll", () => onScroll(mC, months, setMonth));
        if (viewType === "polaroid" && dC)
            dC.addEventListener("scroll", () => onScroll(dC, days, setDay));
        // cleanup omitted for brevity
    }, [years, months, days]);
    // state가 바뀔 때 마다 onChange 호출
    useEffect(() => {
        if (viewType === "polaroid")
            onChange(`${year}-${month}-${day}`);
        else
            onChange(`${year}-${month}`);
    }, [year, month, day]);
    const highlight = userCharacter ? colorMap[userCharacter] : "#ccc";
    const styleVars = {
        "--picker-highlight": highlight,
    };
    return (_jsxs("div", { className: styles.picker, children: [_jsx("div", { className: styles.column, ref: yearCol, children: years.map((y) => (_jsxs("div", { className: `${styles.option} ${y === year ? styles.selected : ""}`, children: [y, "\uB144"] }, y))) }), _jsx("div", { className: styles.column, ref: monthCol, children: months.map((m) => (_jsxs("div", { className: `${styles.option} ${m === month ? styles.selected : ""}`, children: [m, "\uC6D4"] }, m))) }), viewType === "polaroid" && (_jsx("div", { className: styles.column, ref: dayCol, children: days.map((d) => (_jsxs("div", { className: `${styles.option} ${d === day ? styles.selected : ""}`, children: [d, "\uC77C"] }, d))) }))] }));
};
export default DateSelector;
