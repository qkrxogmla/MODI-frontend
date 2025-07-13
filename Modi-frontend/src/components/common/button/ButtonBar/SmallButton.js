import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./ButtonBar.module.css";
export default function ButtonBar({ label, onClick, disabled, size = "small", }) {
    return (_jsx("button", { className: `${styles.button} ${styles[size]}`, onClick: onClick, disabled: disabled, children: _jsx("span", { className: styles.label, children: label }) }));
}
