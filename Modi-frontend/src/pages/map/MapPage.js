import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./MapPage.module.css";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import KakaoMap from "../../components/map/KakaoMap";
const MapPage = () => {
    return (_jsx("div", { className: styles.mapPage_wrapper, children: _jsxs("div", { className: styles.mapPage, children: [_jsx(Header, {}), _jsx("div", { className: styles.mapContainer, children: _jsx(KakaoMap, {}) }), _jsx(Footer, {})] }) }));
};
export default MapPage;
