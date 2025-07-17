import React, { useState, useMemo } from "react";
import pageStyles from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../../components/HomePage/HomeHeader/HomeHeader";
import DateSelector, {
  DiaryItem,
} from "../../components/HomePage/DateSelect/DateSelector";
import ButtonBar from "../../components/common/button/ButtonBar/PrimaryButton";
import Modal from "../../components/common/Modal";
import PolaroidDiary from "../../components/HomePage/Diary/Polaroid/PolaroidDiary";
import { useCharacter } from "../../contexts/CharacterContext";
import { allDiaries } from "../../data/diaries";
import EmotionCharacter from "../../components/HomePage/Diary/Polaroid/EmotionCharacter";
import EmotionTagList from "../../components/HomePage/Diary/Polaroid/EmotionTagList";

interface PolaroidViewProps {
  onSwitchView: () => void;
}

export default function PolaroidView({ onSwitchView }: PolaroidViewProps) {
  const navigate = useNavigate();
  const { character } = useCharacter();

  const allDates = useMemo(
    () => allDiaries.map((d) => d.date).sort((a, b) => a.localeCompare(b)),
    []
  );
  const [viewDate, setViewDate] = useState(() => allDates.at(-1)!);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrev = () => {
    const idx = allDates.indexOf(viewDate);
    if (idx > 0) setViewDate(allDates[idx - 1]);
  };
  const handleNext = () => {
    const idx = allDates.indexOf(viewDate);
    if (idx < allDates.length - 1) setViewDate(allDates[idx + 1]);
  };

  return (
    <div className={pageStyles.wrapper}>
      {/* HomeHeader 에 props 로 상태·핸들러 내려주기 */}
      <HomeHeader
        viewType="polaroid"
        currentDate={viewDate}
        onPrev={handlePrev}
        onNext={handleNext}
        onOpenModal={() => {
          console.log(">> PolaroidView: onOpenModal 호출");
          setIsModalOpen(true);
        }}
        onSwitchView={onSwitchView}
      />
      <div className={pageStyles.content}>
        {allDiaries
          .filter((d) => d.date === viewDate)
          .map((d) => (
            <React.Fragment key={d.id}>
              <PolaroidDiary
                date={d.date}
                photoUrl={d.photoUrl}
                emotion={d.emotion}
                content={d.summary}
                tags={d.tags ?? []}
                clicked={false}
              />
            </React.Fragment>
          ))}
      </div>

      {/* 날짜 선택 모달 */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className={pageStyles.modalInner}>
          <h3 className={pageStyles.modalTitle}>다른 날짜 일기 보기</h3>

          <DateSelector
            viewType="polaroid"
            items={allDates.map((d) => ({ date: d }))}
            initialDate={viewDate}
            onChange={(d) => {
              setViewDate(d);
              setIsModalOpen(false);
            }}
            userCharacter={character!}
          />
        </div>
        <div className={pageStyles.footerWrapper}>
          <ButtonBar
            location="modal"
            label="확인"
            onClick={() => setIsModalOpen(false)}
            size="primary"
            disabled={false}
          />
        </div>
      </Modal>
    </div>
  );
}
