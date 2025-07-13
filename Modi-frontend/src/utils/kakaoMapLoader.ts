export const loadKakaoMapAPI = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // 이미 로드되어 있는지 확인
    if (window.kakao && window.kakao.maps) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_MAP_API_KEY
    }&libraries=services,clusterer`;

    script.onload = () => {
      resolve();
    };

    script.onerror = () => {
      reject(new Error("카카오 지도 API 로드에 실패했습니다."));
    };

    document.head.appendChild(script);
  });
};
