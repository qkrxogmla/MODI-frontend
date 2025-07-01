import styles from "./HomeCharacter.module.css";

export default function HomeCharacter() {
  return (
    <div className={styles.container}>
      <img
        src="/images/home_character.svg"
        alt="Home character"
        className={styles.img}
      />
    </div>
  );
}
