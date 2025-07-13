import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./HomeHeader.module.css";
import { ReactComponent as LeftArrow } from "../../../public/icons/left_arrow.svg";
import { ReactComponent as RightArrow } from "../../../public/icons/right_arrow.svg";
import { ReactComponent as DownArrow } from "../../../public/icons/down_arrow.svg";
import PolaroidButton from "../../../../components/common/button/ButtonIcon/PolaroidButton";
import PhotoButton from "../../../../components/common/button/ButtonIcon/PhotoButton";
export default function HomeHeader({ viewType, currentDate, onPrev, onNext, onOpenModal, onSwitchView, }) {
    // 텍스트 포맷:
    const label = viewType === "polaroid"
        ? new Date(currentDate).toLocaleDateString("en", {
            month: "short",
            day: "2-digit",
        })
        : new Date(currentDate + "-01").toLocaleDateString("en", {
            month: "short",
            year: "numeric",
        });
    return (_jsxs("div", { className: styles.header, children: [_jsxs("div", { className: styles.center, children: [_jsx("button", { onClick: onPrev, className: styles.nav, children: _jsx(LeftArrow, {}) }), _jsxs("button", { onClick: onOpenModal, className: styles.frame, children: [_jsx("span", { className: styles.label, children: label }), _jsx(DownArrow, {})] }), _jsx("button", { onClick: onNext, className: styles.nav, children: _jsx(RightArrow, {}) })] }), _jsx("div", { className: styles.modeSwitch, children: viewType === "polaroid" ? (_jsx(PhotoButton, { onClick: () => onSwitchView("photo") })) : (_jsx(PolaroidButton, { onClick: () => onSwitchView("polaroid") })) })] }));
}
