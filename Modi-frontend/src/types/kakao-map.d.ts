declare global {
  interface Window {
    kakao: any;
  }
}

export interface KakaoMapOptions {
  center: any;
  level: number;
}

export interface KakaoMapMarkerOptions {
  position: any;
  map?: any;
}

export interface KakaoLatLng {
  getLat(): number;
  getLng(): number;
}

export interface KakaoMap {
  setCenter(latlng: KakaoLatLng): void;
  setLevel(level: number): void;
  getCenter(): KakaoLatLng;
  getLevel(): number;
}

export interface KakaoMarker {
  setMap(map: KakaoMap | null): void;
  setPosition(latlng: KakaoLatLng): void;
  getPosition(): KakaoLatLng;
}
