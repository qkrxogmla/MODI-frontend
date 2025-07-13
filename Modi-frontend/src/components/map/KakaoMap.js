import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import styles from "./KakaoMap.module.css";
import { loadKakaoMapAPI } from "../../utils/kakaoMapLoader";
const KakaoMap = ({ center = { lat: 37.5665, lng: 126.978 }, // 서울 시청 기본 위치
level = 3, className, }) => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const initMap = async () => {
            try {
                setIsLoading(true);
                setError(null);
                // 카카오 지도 API 로드
                await loadKakaoMapAPI();
                if (mapRef.current && window.kakao) {
                    const options = {
                        center: new window.kakao.maps.LatLng(center.lat, center.lng),
                        level: level,
                    };
                    mapInstance.current = new window.kakao.maps.Map(mapRef.current, options);
                    setIsLoading(false);
                }
            }
            catch (err) {
                setError(err instanceof Error
                    ? err.message
                    : "지도를 로드하는 중 오류가 발생했습니다.");
                setIsLoading(false);
            }
        };
        initMap();
    }, [center.lat, center.lng, level]);
    if (isLoading) {
        return (_jsx("div", { className: `${styles.kakaoMap} ${styles.loading} ${className || ""}`, children: _jsx("div", { className: styles.loadingText, children: "\uC9C0\uB3C4\uB97C \uB85C\uB4DC\uD558\uB294 \uC911..." }) }));
    }
    if (error) {
        return (_jsx("div", { className: `${styles.kakaoMap} ${styles.error} ${className || ""}`, children: _jsx("div", { className: styles.errorText, children: error }) }));
    }
    return (_jsx("div", { ref: mapRef, className: `${styles.kakaoMap} ${className || ""}` }));
};
export default KakaoMap;
