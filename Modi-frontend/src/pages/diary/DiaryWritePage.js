import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import ExifReader from "exifreader";
import styles from "./DiaryWritePage.module.css";
import Header from "../../components/common/Header";
import PrimaryButton from "../../components/common/button/ButtonBar/PrimaryButton";
const DiaryWritePage = () => {
    const fileInputRef = useRef(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [address, setAddress] = useState("");
    const [keywords, setKeywords] = useState("");
    const [content, setContent] = useState("");
    const kakaoKey = import.meta.env.VITE_KAKAO_API_KEY;
    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file)
            return;
        const reader = new FileReader();
        reader.onload = async () => {
            const imageUrl = reader.result;
            setImagePreview(imageUrl);
            // GPS 정보 추출
            const arrayBuffer = await file.arrayBuffer();
            const tags = await ExifReader.load(arrayBuffer);
            console.log("EXIF 태그:", tags);
            const latRaw = tags["GPSLatitude"]?.value;
            const lonRaw = tags["GPSLongitude"]?.value;
            if (Array.isArray(latRaw) &&
                Array.isArray(lonRaw) &&
                latRaw.length === 3 &&
                lonRaw.length === 3) {
                // [ [37,1], [17,1], [383,10] ] 구조
                const parse = (dms) => dms.map(([num, den]) => num / den);
                const lat = parse(latRaw);
                const lon = parse(lonRaw);
                const latRef = tags["GPSLatitudeRef"]?.description || "N";
                const lonRef = tags["GPSLongitudeRef"]?.description || "E";
                const latitude = convertDMSToDD(lat, latRef);
                const longitude = convertDMSToDD(lon, lonRef);
                reverseGeocode(latitude, longitude);
            }
            else {
                alert("GPS 데이터 형식이 잘못되었거나 없습니다.");
            }
        };
        reader.readAsDataURL(file);
    };
    const convertDMSToDD = (dms, ref) => {
        const [degrees, minutes, seconds] = dms;
        let dd = degrees + minutes / 60 + seconds / 3600;
        if (ref === "S" || ref === "W")
            dd *= -1;
        return dd;
    };
    const reverseGeocode = async (lat, lon) => {
        try {
            if (!kakaoKey) {
                console.error("Kakao API 키가 설정되지 않았습니다.");
                return;
            }
            const res = await fetch(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}`, {
                headers: {
                    Authorization: `KakaoAK ${kakaoKey}`,
                },
            });
            const data = await res.json();
            const addressName = data.documents?.[0]?.address?.address_name;
            if (addressName) {
                setAddress(addressName);
            }
            else {
                alert("주소를 찾을 수 없어요.");
            }
        }
        catch (err) {
            console.error("역지오코딩 실패", err);
        }
    };
    return (_jsx("div", { className: styles.DiaryWrite_wrapper, children: _jsxs("div", { className: styles.DiaryWrite_container, children: [_jsx(Header, {}), _jsxs("div", { className: styles.main_container, children: [_jsx("div", { className: styles.photo_upload_box, onClick: () => fileInputRef.current?.click(), children: imagePreview ? (_jsx("img", { src: imagePreview, alt: "preview", className: styles.preview_image })) : (_jsxs("div", { className: styles.upload_placeholder, children: [_jsx("img", { src: "/icons/plus.svg", alt: "plus" }), _jsx("span", { className: styles.label, children: "\uC0AC\uC9C4 \uCCA8\uBD80" })] })) }), _jsx("input", { type: "file", accept: "image/*", ref: fileInputRef, style: { display: "none" }, onChange: handleFileChange }), _jsxs("div", { className: styles.input_section, children: [_jsx("input", { type: "text", placeholder: "\uC8FC\uC18C\uB294 \uC790\uB3D9\uC73C\uB85C \uC785\uB825\uB3FC\uC694", value: address, onChange: (e) => setAddress(e.target.value), className: styles.input_field1 }), _jsx("button", { className: styles.edit_button, children: _jsx("img", { src: "/icons/edit.svg", alt: "\uD3B8\uC9D1" }) })] }), _jsxs("div", { className: styles.input_group, children: [_jsx("label", { className: styles.input_label, children: "\uD0A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694" }), _jsx("input", { type: "text", placeholder: "\uD0A4\uC6CC\uB4DC\uB97C 3\uAC1C \uC774\uC0C1 \uC785\uB825\uD574\uC8FC\uC138\uC694", value: keywords, onChange: (e) => setKeywords(e.target.value), className: styles.input_field2 })] }), _jsxs("div", { className: styles.input_group, children: [_jsx("label", { className: styles.input_label, children: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694" }), _jsx("textarea", { placeholder: "\uD14D\uC2A4\uD2B8 \uBBF8\uC785\uB825 \uC2DC \uC77C\uAE30\uAC00 \uC790\uB3D9\uC0DD\uC131\uB3FC\uC694", value: content, onChange: (e) => setContent(e.target.value), className: styles.textarea, rows: 4 }), _jsxs("button", { className: styles.autogen_button, children: [_jsx("img", { src: "/icons/rotate_gray.svg" }), " \uC790\uB3D9 \uC0DD\uC131", " "] })] }), _jsx("div", { className: styles.button_area })] }), _jsx(PrimaryButton, { location: "next", label: "\uB2E4\uC74C", onClick: () => {
                        console.log({ imagePreview, address, keywords, content });
                    }, disabled: false })] }) }));
};
export default DiaryWritePage;
