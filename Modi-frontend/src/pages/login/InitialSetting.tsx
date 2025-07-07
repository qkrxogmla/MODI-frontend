import { useState, useRef } from "react";
import styles from "./InitialSetting.module.css";

const InitialSetting = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string>("");
  const completeBtnRef = useRef<HTMLButtonElement>(null);

  const handleCharacterSelect = (character: string) => {
    setSelectedCharacter(character);
    // 완료 버튼을 enabled 상태로 만들고 포커스
    if (completeBtnRef.current) {
      completeBtnRef.current.focus();
    }
  };

  return (
    <div className={styles.initialSetting_wrapper}>
      <div className={styles.initialSetting}>
        <div className={styles.nicknameInput}>
          <div className={styles.nicknameInput_title}>
            닉네임을 입력해주세요
          </div>
          <input
            className={styles.nicknameInput_input}
            type="text"
            placeholder="user123@email.com"
          />
        </div>
        <div className={styles.characterSelect}>
          <div className={styles.characterSelect_title}>
            캐릭터를 선택해주세요
          </div>
          <div className={styles.character_container}>
            <label className={styles.character_label}>
              <input
                type="radio"
                name="character"
                value="momo"
                checked={selectedCharacter === "momo"}
                onChange={(e) => handleCharacterSelect(e.target.value)}
                className={styles.character_radio}
              />
              <span
                className={`${styles.momo} ${styles.character_option}`}
              ></span>
            </label>
            <label className={styles.character_label}>
              <input
                type="radio"
                name="character"
                value="boro"
                checked={selectedCharacter === "boro"}
                onChange={(e) => handleCharacterSelect(e.target.value)}
                className={styles.character_radio}
              />
              <span
                className={`${styles.boro} ${styles.character_option}`}
              ></span>
            </label>
            <label className={styles.character_label}>
              <input
                type="radio"
                name="character"
                value="lumi"
                checked={selectedCharacter === "lumi"}
                onChange={(e) => handleCharacterSelect(e.target.value)}
                className={styles.character_radio}
              />
              <span
                className={`${styles.lumi} ${styles.character_option}`}
              ></span>
            </label>
            <label className={styles.character_label}>
              <input
                type="radio"
                name="character"
                value="zuni"
                checked={selectedCharacter === "zuni"}
                onChange={(e) => handleCharacterSelect(e.target.value)}
                className={styles.character_radio}
              />
              <span
                className={`${styles.zuni} ${styles.character_option}`}
              ></span>
            </label>
          </div>
        </div>
        <button
          ref={completeBtnRef}
          className={`${styles.completeBtn} ${
            selectedCharacter ? styles.enabled : styles.completeBtn_disabled
          }`}
          disabled={!selectedCharacter}
        >
          <span>완료</span>
        </button>
      </div>
    </div>
  );
};

export default InitialSetting;
