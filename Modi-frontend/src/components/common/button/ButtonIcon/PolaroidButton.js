import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./ButtonIcon.module.css";
export default function ButtonIcon({ onClick }) {
    return (_jsx("button", { className: styles.container, onClick: onClick, children: _jsx("img", { src: "/icons/polaroid.svg", alt: "\uD3F4\uB77C\uB85C\uC774\uB4DC \uC544\uC774\uCF58", className: styles.icon }) }));
}
