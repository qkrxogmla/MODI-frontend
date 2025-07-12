import React, { useState, useMemo } from "react";
import HomeHeader from "../../components/HomePage/HomeHeader/HomeHeader";
import DateSelector from "../../components/HomePage/DateSelect/DateSelector";
import ButtonBar from "../../components/common/button/ButtonBar/PrimaryButton";
import Modal from "../../components/common/Modal";
import EmotionTab from "../../components/HomePage/EmotionTab/EmotionTab";
import PhotoDiary from "../../components/HomePage/Diary/PhotoDiary";
import { useCharacter } from "../../contexts/CharacterContext";
