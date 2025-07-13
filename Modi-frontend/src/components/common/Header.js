import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Header.module.css";
const Header = () => {
    return (_jsx("div", { className: styles.header_wrapper, children: _jsx("div", { className: styles.header_container, children: "Header" }) }));
};
export default Header;
