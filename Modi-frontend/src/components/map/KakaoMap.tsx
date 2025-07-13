import React, { useEffect, useRef, useState } from "react";
import styles from "./KakaoMap.module.css";
import { loadKakaoMapAPI } from "../../utils/kakaoMapLoader";

interface KakaoMapProps {
  center?: { lat: number; lng: number };
  level?: number;
  className?: string;
}

const KakaoMap: React.FC<KakaoMapProps> = ({
  center = { lat: 37.5665, lng: 126.978 }, // 서울 시청 기본 위치
  level = 3,
  className,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

          mapInstance.current = new window.kakao.maps.Map(
            mapRef.current,
            options
          );
          setIsLoading(false);
        }
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "지도를 로드하는 중 오류가 발생했습니다."
        );
        setIsLoading(false);
      }
    };

    initMap();
  }, [center.lat, center.lng, level]);

  if (isLoading) {
    return (
      <div
        className={`${styles.kakaoMap} ${styles.loading} ${className || ""}`}
      >
        <div className={styles.loadingText}>지도를 로드하는 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${styles.kakaoMap} ${styles.error} ${className || ""}`}>
        <div className={styles.errorText}>{error}</div>
      </div>
    );
  }

  return (
    <div ref={mapRef} className={`${styles.kakaoMap} ${className || ""}`} />
  );
};

export default KakaoMap;
