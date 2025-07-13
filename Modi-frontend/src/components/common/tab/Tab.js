import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Tab.module.css";
export default function Tab({ label, selected, onClick }) {
    return (_jsx("div", { className: `${styles.container} ${selected ? styles.selected : styles.unselected}`, onClick: onClick, children: _jsx("span", { className: styles.label, children: label }) }));
}
