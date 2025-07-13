import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import styles from "./InitialSetting.module.css";
import PrimaryButton from "../../components/common/button/ButtonBar/PrimaryButton";
import { useCharacter } from "../../contexts/CharacterContext";
const InitialSetting = () => {
    const { setCharacter } = useCharacter();
    const navigate = useNavigate();
    const [selectedCharacter, setSelectedCharacter] = useState("");
    const completeBtnRef = useRef(null);
    const handleCharacterSelect = (character) => {
        setSelectedCharacter(character);
        setCharacter(character);
        // 완료 버튼을 enabled 상태로 만들고 포커스
        if (completeBtnRef.current) {
            completeBtnRef.current.focus();
        }
    };
    const handleComplete = () => {
        navigate("/home"); // 홈으로 이동
    };
    return (_jsx("div", { className: styles.initialSetting_wrapper, children: _jsxs("div", { className: styles.initialSetting, children: [_jsx(Header, {}), _jsxs("div", { className: styles.nicknameInput, children: [_jsx("div", { className: styles.nicknameInput_title, children: "\uB2C9\uB124\uC784\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694" }), _jsx("input", { className: styles.nicknameInput_input, type: "text", placeholder: "user123@email.com" })] }), _jsxs("div", { className: styles.characterSelect, children: [_jsx("div", { className: styles.characterSelect_title, children: "\uCE90\uB9AD\uD130\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694" }), _jsxs("div", { className: styles.character_container, children: [_jsxs("label", { className: styles.character_label, children: [_jsx("input", { type: "radio", name: "character", value: "momo", checked: selectedCharacter === "momo", onChange: (e) => handleCharacterSelect(e.target.value), className: styles.character_radio }), _jsx("span", { className: `${styles.momo} ${styles.character_option}` })] }), _jsxs("label", { className: styles.character_label, children: [_jsx("input", { type: "radio", name: "character", value: "boro", checked: selectedCharacter === "boro", onChange: (e) => handleCharacterSelect(e.target.value), className: styles.character_radio }), _jsx("span", { className: `${styles.boro} ${styles.character_option}` })] }), _jsxs("label", { className: styles.character_label, children: [_jsx("input", { type: "radio", name: "character", value: "lumi", checked: selectedCharacter === "lumi", onChange: (e) => handleCharacterSelect(e.target.value), className: styles.character_radio }), _jsx("span", { className: `${styles.lumi} ${styles.character_option}` })] }), _jsxs("label", { className: styles.character_label, children: [_jsx("input", { type: "radio", name: "character", value: "zuni", checked: selectedCharacter === "zuni", onChange: (e) => handleCharacterSelect(e.target.value), className: styles.character_radio }), _jsx("span", { className: `${styles.zuni} ${styles.character_option}` })] })] })] }), _jsx(PrimaryButton, { location: "login", label: "\uC644\uB8CC", onClick: handleComplete, disabled: !selectedCharacter })] }) }));
};
export default InitialSetting;
