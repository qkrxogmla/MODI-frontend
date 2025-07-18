import styles from "./DiaryKeywordPage.module.css";
import Header from "../../components/common/Header";
import PrimaryButton from "../../components/common/button/ButtonBar/PrimaryButton";
import { useNavigate } from "react-router-dom";
import KeywordInput from "../../components/DiaryPage/KeywordInput";
import { useDiaryDraft } from "../../hooks/useDiaryDraft";

const DiaryKeywordPage = () => {
  const navigate = useNavigate();
  const { draft } = useDiaryDraft();

  return (
    <div className={styles.DiaryKeyword_wrapper}>
      <div className={styles.DiaryKeyword_container}>
        <Header />
        <div className={styles.main_container}>
          <KeywordInput />
        </div>
        <PrimaryButton
          location="next"
          label="완료"
          onClick={() => navigate("/detail")}
          disabled={draft.keywords.length < 3}
        />
      </div>
    </div>
  );
};

export default DiaryKeywordPage;
