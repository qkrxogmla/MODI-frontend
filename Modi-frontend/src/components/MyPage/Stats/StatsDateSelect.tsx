import React, { useState } from "react";
import styles from "./StatsDateSelect.module.css";
import BottomSheet from "../../common/BottomSheet";
import downArrowIcon from "../../../assets/arrow_icons/down_arrow.svg";

interface Props {
  months: string[];
  initialMonth: string;
  onMonthChange: (ym: string) => void;
}

export default function StatsDateSelect({
  months,
  initialMonth,
  onMonthChange,
}: Props) {
  const [open, setOpen] = useState(false);
  const year = initialMonth.slice(0, 4);
  const monthNum = parseInt(initialMonth.slice(5), 10) - 1;
  const MONTH_NAMES = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May.",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  const label = MONTH_NAMES[monthNum];
  return (
    <>
      <div className={styles.header}>
        {/* 년·월 + 토글 */}
        <div className={styles.title} onClick={() => setOpen((o) => !o)}>
          {year}&nbsp;{label}
          <img src={downArrowIcon} alt="▼" className={styles.downArrow} />
        </div>
      </div>

      <BottomSheet
        isOpen={open}
        onClose={() => setOpen(false)}
        minimizeOnDrag={false}
      >
        {months.map((m) => {
          const y = m.slice(0, 4);
          const mn = parseInt(m.slice(5), 10) - 1;
          const text = `${y} ${MONTH_NAMES[mn]}`;
          return (
            <div
              key={m}
              className={
                m === initialMonth
                  ? `${styles.option} ${styles.selected}`
                  : styles.option
              }
              onClick={() => {
                onMonthChange(m);
                setOpen(false);
              }}
            >
              {text}
            </div>
          );
        })}
      </BottomSheet>
    </>
  );
}
