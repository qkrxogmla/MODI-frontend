import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import style from "./HomePage.module.css";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
// import HomeHeader from "./components/HomeHeader";
// import PolaroidView from "./components/PolaroidView";
// import PhotoView from "./components/PhotoView";
const HomePage = () => {
    return (_jsx("div", { className: style.home_wrapper, children: _jsxs("div", { className: style.home_container, children: [_jsx(Header, {}), _jsx(Footer, {})] }) }));
};
export default HomePage;
