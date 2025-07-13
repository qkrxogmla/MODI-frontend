import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./RecordDetailPage.module.css";
import Frame from "../../components/common/frame/Frame";
import { useState } from "react";
const RecordDetailPage = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [messageText, setMessageText] = useState("");
    const handleSaveClick = () => {
        setMessageText("사진이 갤러리에 저장되었습니다.");
        setShowMessage(true);
        // 3초 후 메시지 숨기기
        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    };
    const handleFavoriteClick = () => {
        setMessageText("사진이 즐겨찾기에 추가되었습니다.");
        setShowMessage(true);
        // 3초 후 메시지 숨기기
        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    };
    return (_jsxs("div", { className: styles.RecordDetailPage, children: [_jsx("div", { className: styles.TopBar, children: "\uB4A4\uB85C\uAC00\uAE30 \uBC84\uD2BC + \uC77C\uAE30 \uAE30\uB85D\uD558\uAE30" }), _jsxs("div", { className: styles.btn_container, children: [_jsx("button", { className: styles.btn, value: "\uC800\uC7A5", onClick: handleSaveClick, children: _jsx("img", { className: styles.btn_img, src: "../../../public/icons/save.svg", alt: "\uC800\uC7A5" }) }), _jsx("button", { className: styles.btn, value: "\uC990\uACA8\uCC3E\uAE30", onClick: handleFavoriteClick, children: _jsx("img", { className: styles.btn_img, src: "../../../public/icons/favorite.svg", alt: "\uC990\uACA8\uCC3E\uAE30" }) }), _jsx("button", { className: styles.btn, value: "\uC218\uC815", children: _jsx("img", { className: styles.btn_img, src: "../../../public/icons/edit.svg", alt: "\uC218\uC815" }) }), _jsx("button", { className: styles.btn, value: "\uC0AD\uC81C", children: _jsx("img", { className: styles.btn_img, src: "../../../public/icons/delete.svg", alt: "\uC0AD\uC81C" }) })] }), _jsx("div", { className: styles.frame_container, children: _jsx(Frame, {}) }), showMessage && (_jsx("div", { className: styles.message_container, children: _jsx("span", { className: styles.message_text, children: messageText }) })), _jsx("div", { className: styles.BottomBar, children: "\uD558\uB2E8 \uD0ED \uBC14 \uB4E4\uC5B4\uAC08 \uC790\uB9AC" })] }));
};
export default RecordDetailPage;
