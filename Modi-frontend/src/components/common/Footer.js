import { jsx as _jsx } from "react/jsx-runtime";
import { useNavigate, useLocation } from "react-router-dom";
import style from "./Footer.module.css";
import FooterIcon from "./instance/footer";
const Footer = () => {
    const navigator = useNavigate();
    const location = useLocation();
    return (_jsx("div", { className: style.footer_wrapper, children: _jsx("div", { className: style.footer_container, children: Object.values(FooterIcon).map((icon, index) => {
                const isCurrent = location.pathname.includes(icon === "add" ? "diary" : icon);
                const iconSrc = isCurrent
                    ? `/icons/clicked_${icon}.svg`
                    : `/icons/${icon}.svg`;
                return (_jsx("img", { className: style.footer_button, src: iconSrc, alt: icon, onClick: () => {
                        navigator(`/${icon === "add" ? "diary" : icon}`);
                    } }, index));
            }) }) }));
};
export default Footer;
