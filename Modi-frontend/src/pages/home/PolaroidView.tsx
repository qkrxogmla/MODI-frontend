import { useState, useMemo, useEffect, useRef } from "react";
import pageStyles from "./HomePage.module.css";
import HomeHeader from "../../components/HomePage/HomeHeader/HomeHeader";
import DateSelector, {
  DiaryItem,
} from "../../components/HomePage/DateSelect/DateSelector";
import ButtonBar from "../../components/common/button/ButtonBar/PrimaryButton";
import BottomSheet from "../../components/common/BottomSheet";
import PolaroidFrame from "../../components/HomePage/Diary/Polaroid/PolaroidFrame";
import EmotionCharacter from "../../components/HomePage/Diary/Polaroid/EmotionCharacter";
import EmotionTagList from "../../components/HomePage/Diary/Polaroid/EmotionTagList";
import { useCharacter } from "../../contexts/CharacterContext";
import { allDiaries } from "../../data/diaries";

interface PolaroidViewProps {
  onSwitchView: () => void;
}

export default function PolaroidView({ onSwitchView }: PolaroidViewProps) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const hasOpened = useRef(false);
  const { character } = useCharacter();

  const allDates = useMemo(
    () => allDiaries.map((d) => d.date).sort((a, b) => a.localeCompare(b)),
    []
  );
  const [viewDate, setViewDate] = useState(() => allDates.at(-1)!);

  // 현재 인덱스
  const currentIdx = allDates.indexOf(viewDate);
  // 보여줄 날짜: 이전, 현재, 다음
  const slots = [
    currentIdx > 0
      ? allDiaries.find((d) => d.date === allDates[currentIdx - 1])!
      : null,
    allDiaries.find((d) => d.date === viewDate)!,
    currentIdx < allDates.length - 1
      ? allDiaries.find((d) => d.date === allDates[currentIdx + 1])!
      : null,
  ];

  const currentDiary = allDiaries.find((d) => d.date === viewDate)!;

  const handlePrev = () => {
    const idx = allDates.indexOf(viewDate);
    if (idx > 0) setViewDate(allDates[idx - 1]);
  };
  const handleNext = () => {
    const idx = allDates.indexOf(viewDate);
    if (idx < allDates.length - 1) setViewDate(allDates[idx + 1]);
  };

  // 모달 열릴 때마다 초기화
  useEffect(() => {
    if (isSheetOpen) {
      hasOpened.current = false;
    }
  }, [isSheetOpen]);

  const handleChange = (newDate: string) => {
    setViewDate(newDate);

    if (hasOpened.current) {
      setIsSheetOpen(false); // 두 번째 이후부터 닫힘
    } else {
      hasOpened.current = true; // 첫 호출은 무시
    }
  };

  return (
    <div className={pageStyles.wrapper}>
      {/* HomeHeader 에 props 로 상태·핸들러 내려주기 */}
      <HomeHeader
        viewType="polaroid"
        currentDate={viewDate}
        onPrev={handlePrev}
        onNext={handleNext}
        onOpenModal={() => setIsSheetOpen(true)}
        onSwitchView={onSwitchView}
      />
      {/* ← 프레임만 캐러셀로 감싸기 */}
      <div className={pageStyles.content}>
        <div className={pageStyles.carousel}>
          {slots.map((d, i) => (
            <div key={i} className={pageStyles[`slot${i + 1}`]}>
              {d ? (
                <PolaroidFrame
                  photoUrl={d.photoUrl}
                  date={d.date}
                  emotion={d.emotion}
                  summary={d.summary}
                />
              ) : (
                <div className={pageStyles.emptySlot} />
              )}
            </div>
          ))}
        </div>
        {/* ← 이 아래는 “항상 현재 일기” 것만 고정으로 보여줍니다 */}
        <div className={pageStyles.staticInfo}>
          <div className={pageStyles.character}>
            <EmotionCharacter emotion={currentDiary.emotion} />
          </div>

          <EmotionTagList tags={currentDiary.tags ?? []} />
        </div>
      </div>

      {/* 날짜 선택 모달 */}
      <BottomSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        minimizeOnDrag={true} // 드래그 시 최소화 기능 원하면 true
      >
        <div className={pageStyles.modalInner}>
          <h3 className={pageStyles.modalTitle}>다른 날짜 일기 보기</h3>

          <DateSelector
            viewType="polaroid"
            items={allDates.map((d) => ({ date: d }))}
            initialDate={viewDate}
            onChange={handleChange}
            userCharacter={character!}
          />
        </div>
        <div className={pageStyles.footerWrapper}>
          <ButtonBar
            location="modal"
            label="확인"
            onClick={() => setIsSheetOpen(false)}
            size="primary"
            disabled={false}
          />
        </div>
      </BottomSheet>
    </div>
  );
}
