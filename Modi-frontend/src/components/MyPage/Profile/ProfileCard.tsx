import React from "react";
import styles from "./ProfileCard.module.css";
import EditButton from "../../../components/common/button/ButtonIcon/EditButton";
import profileImg from "../../../../public/icons/profile_img.svg";
export interface ProfileCardProps {
  nickname: string;
  email: string;
  onEdit: () => void;
}

export default function ProfileCard({
  nickname,
  email,
  onEdit,
}: ProfileCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.frame}>
        <img
          src={profileImg}
          alt="기본 프로필 사진"
          className={styles.profileImg}
        />
        <div className={styles.info}>
          <div className={styles.nickname}>{nickname}</div>
          <div className={styles.email}>{email}</div>
        </div>
      </div>

      <button className={styles.editBtn} onClick={onEdit}>
        <EditButton />
      </button>
    </div>
  );
}
