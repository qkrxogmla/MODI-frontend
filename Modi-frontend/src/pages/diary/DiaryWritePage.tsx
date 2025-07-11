import { useRef, useState } from "react";
import ExifReader from "exifreader";
import styles from "./DiaryWritePage.module.css";
import Header from "../../components/common/Header";
import PrimaryButton from "../../components/common/button/ButtonBar/PrimaryButton";

const DiaryWritePage = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [address, setAddress] = useState<string>("");
  const [keywords, setKeywords] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const kakaoKey = import.meta.env.VITE_KAKAO_API_KEY;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async () => {
      const imageUrl = reader.result as string;
      setImagePreview(imageUrl);

      // GPS 정보 추출
      const arrayBuffer = await file.arrayBuffer();
      const tags = await ExifReader.load(arrayBuffer);

      console.log("EXIF 태그:", tags);

      const latRaw = tags["GPSLatitude"]?.value as [number, number][];
      const lonRaw = tags["GPSLongitude"]?.value as [number, number][];

      if (
        Array.isArray(latRaw) &&
        Array.isArray(lonRaw) &&
        latRaw.length === 3 &&
        lonRaw.length === 3
      ) {
        // [ [37,1], [17,1], [383,10] ] 구조
        const parse = (dms: [number, number][]): number[] =>
          dms.map(([num, den]) => num / den);

        const lat = parse(latRaw);
        const lon = parse(lonRaw);

        const latRef = tags["GPSLatitudeRef"]?.description || "N";
        const lonRef = tags["GPSLongitudeRef"]?.description || "E";

        const latitude = convertDMSToDD(lat, latRef);
        const longitude = convertDMSToDD(lon, lonRef);
        reverseGeocode(latitude, longitude);
      } else {
        alert("GPS 데이터 형식이 잘못되었거나 없습니다.");
      }
    };

    reader.readAsDataURL(file);
  };

  const convertDMSToDD = (dms: number[], ref: string) => {
    const [degrees, minutes, seconds] = dms;
    let dd = degrees + minutes / 60 + seconds / 3600;
    if (ref === "S" || ref === "W") dd *= -1;
    return dd;
  };

  const reverseGeocode = async (lat: number, lon: number) => {
    try {
      if (!kakaoKey) {
        console.error("Kakao API 키가 설정되지 않았습니다.");
        return;
      }

      const res = await fetch(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}`,
        {
          headers: {
            Authorization: `KakaoAK ${kakaoKey}`,
          },
        }
      );

      const data = await res.json();
      const addressName = data.documents?.[0]?.address?.address_name;
      if (addressName) {
        setAddress(addressName);
      } else {
        alert("주소를 찾을 수 없어요.");
      }
    } catch (err) {
      console.error("역지오코딩 실패", err);
    }
  };

  return (
    <div className={styles.DiaryWrite_wrapper}>
      <div className={styles.DiaryWrite_container}>
        <Header />
        <div className={styles.main_container}>
          {/* 사진 첨부 */}
          <div
            className={styles.photo_upload_box}
            onClick={() => fileInputRef.current?.click()}
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="preview"
                className={styles.preview_image}
              />
            ) : (
              <div className={styles.upload_placeholder}>
                <img src="/icons/plus.svg" alt="plus" />
                <span className={styles.label}>사진 첨부</span>
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          {/* 주소 입력 */}
          <div className={styles.input_section}>
            <input
              type="text"
              placeholder="주소는 자동으로 입력돼요"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={styles.input_field1}
            />
            <button className={styles.edit_button}>
              <img src="/icons/edit.svg" alt="편집" />
            </button>
          </div>

          {/* 키워드 */}
          <div className={styles.input_group}>
            <label className={styles.input_label}>키워드를 입력해주세요</label>
            <input
              type="text"
              placeholder="키워드를 3개 이상 입력해주세요"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className={styles.input_field2}
            />
          </div>

          {/* 내용 */}
          <div className={styles.input_group}>
            <label className={styles.input_label}>내용을 입력해주세요</label>
            <textarea
              placeholder="텍스트 미입력 시 일기가 자동생성돼요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className={styles.textarea}
              rows={4}
            />
            <button className={styles.autogen_button}>
              <img src="/icons/rotate_gray.svg" /> 자동 생성{" "}
              {/* 온클릭 이벤트 달아야 함 */}
            </button>
          </div>

          {/* 다음 버튼 */}
          <div className={styles.button_area}></div>
        </div>
        <PrimaryButton
          location="next"
          label="다음"
          onClick={() => {
            console.log({ imagePreview, address, keywords, content });
          }}
          disabled={false}
        />
      </div>
    </div>
  );
};

export default DiaryWritePage;
