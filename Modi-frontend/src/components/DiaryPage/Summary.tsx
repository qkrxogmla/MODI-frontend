import styles from "./Summary.module.css";

const Summary = () => {
  return (
    <div>
      <button className={styles.Aa}>
        Aa
        <img src="/icons/drop.svg" />
      </button>
      <input className={styles.content} />
      <div className={styles.autogen_button_wrapper}>
        <button className={styles.autogen_button}>
          <img src="/icons/rotate_gray.svg" /> 다시 생성하기
        </button>
      </div>
    </div>
  );
};

export default Summary;
