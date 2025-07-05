import React from "react";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <button className={styles.googleLogin_btn}>
        <span>구글로 시작하기</span>
      </button>
    </div>
  );
};

export default LoginPage;
