import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./ButtonIcon.module.css";
export default function ButtonIcon({ onClick }) {
    return (_jsx("button", { className: styles.container, onClick: onClick, children: _jsx("img", { src: "/icons/edit.svg", alt: "\uC218\uC815\uD558\uAE30 \uC544\uC774\uCF58", className: styles.icon }) }));
}
