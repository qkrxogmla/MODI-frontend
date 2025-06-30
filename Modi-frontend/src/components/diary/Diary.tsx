import style from "./Diary.module.css";

interface DiaryProps {
  emotion: string;
  content: string;
  clicked: boolean;
}

const Diary = ({ emotion, content, clicked }: DiaryProps) => {
  return (
    <div className={`${style.diary_container} ${clicked ? style.clicked : ""}`}>
      <p className={style.emotion}>{emotion}</p>
      <p className={style.content}>{content}</p>
    </div>
  );
};

export default Diary;
