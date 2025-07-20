import styles from "./Header.module.css";

interface HeaderProps {
  left?: string;
  middle?: string;
  right?: string;
}

const Header = ({ left, middle, right }: HeaderProps) => {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header_container}>
        <div className={styles.left}>
          {left && <img src={left} alt="left icon" />}
        </div>
        {middle && <span className={styles.func}>{middle}</span>}
        <div className={styles.right}>
          {right && <img src={right} alt="right icon" />}
        </div>
      </div>
    </div>
  );
};

export default Header;
