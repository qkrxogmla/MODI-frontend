import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./PhotoDiary.module.css";
const PhotoDiary = ({ photoUrl /* , ...rest */, }) => (_jsx("div", { className: styles.card, children: photoUrl ? (_jsx("img", { src: photoUrl, className: styles.thumb, alt: "" })) : (_jsx("div", { className: styles.thumb })) }));
export default PhotoDiary;
