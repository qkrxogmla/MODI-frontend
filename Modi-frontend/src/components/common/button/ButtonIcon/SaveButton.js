import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./ButtonIcon.module.css";
export default function ButtonIcon({ onClick }) {
    return (_jsx("button", { className: styles.container, onClick: onClick, children: _jsx("img", { src: "/icons/save.svg", alt: "\uC800\uC7A5 \uC544\uC774\uCF58", className: styles.icon }) }));
}
