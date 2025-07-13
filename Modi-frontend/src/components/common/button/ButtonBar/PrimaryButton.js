import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./ButtonBar.module.css";
export default function ButtonBar({ location, label, onClick, disabled, size = "primary", }) {
    return (_jsx("button", { className: `${styles.button} ${styles[size]} ${styles[location]}`, onClick: onClick, disabled: disabled, children: _jsx("span", { className: styles.label, children: label }) }));
}
