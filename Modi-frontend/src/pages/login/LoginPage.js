import { jsx as _jsx } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/common/button/ButtonBar/PrimaryButton";
import styles from "./LoginPage.module.css";
const LoginPage = () => {
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        // 로그인 로직 여기서 구현!
        navigate("/test-initialsetting");
    };
    return (_jsx("div", { className: styles.loginPage_wrapper, children: _jsx("div", { className: styles.loginPage, children: _jsx(PrimaryButton, { location: "login", label: "\uAD6C\uAE00\uB85C \uC2DC\uC791\uD558\uAE30", onClick: handleGoogleLogin }) }) }));
};
export default LoginPage;
