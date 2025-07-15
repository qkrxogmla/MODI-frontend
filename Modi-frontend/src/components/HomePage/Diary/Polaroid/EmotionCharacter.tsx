import React from "react";
import type { CharacterType } from "../../../../utils/emotionImages";
import { getEmotionIcon } from "../../../../utils/emotionImages";
import type { Emotion } from "../../../../data/diaries";

export default function EmotionCharacter({
  characterId,
  emotion,
}: {
  characterId: CharacterType;
  emotion: Emotion;
}) {
  const Icon = getEmotionIcon(characterId, emotion);
  if (!Icon) return null;
  return <Icon />;
}
