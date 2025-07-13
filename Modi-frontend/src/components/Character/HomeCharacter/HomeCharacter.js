import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./HomeCharacter.module.css";
export default function HomeCharacter() {
    return (_jsx("div", { className: styles.container, children: _jsx("img", { src: "/images/home_character.svg", alt: "Home character", className: styles.img }) }));
}
