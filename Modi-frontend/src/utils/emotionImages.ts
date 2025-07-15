import type { SVGProps, FC } from "react";
import { useCharacter } from "../contexts/CharacterContext";

export type CharacterType = "momo" | "boro" | "lumi" | "zuni";
export type Emotion =
  | "기쁨"
  | "놀람"
  | "보통"
  | "떨림"
  | "사랑"
  | "신남"
  | "아픔"
  | "슬픔"
  | "지루함"
  | "화남";

interface IconModule {
  default: React.FC<React.SVGProps<SVGSVGElement>>;
}

const modules = import.meta.glob<FC<SVGProps<SVGSVGElement>>>(
  // emotion_home 폴더 아래에 있는 모든 .svg
  "../assets/emotion_home/**/*.svg",
  {
    import: "default",
    eager: true,
  }
);

console.log("🌱 modules:", modules);

export const emotionIconMap: Record<
  CharacterType,
  Record<Emotion, FC<SVGProps<SVGSVGElement>>>
> = {} as any;

Object.entries(modules).forEach(([path, mod]) => {
  const parts = path.split("/");
  const character = parts[3] as CharacterType;
  const fileName = parts[4]; // 'home_momo-happy.svg'
  const match = fileName.match(/home_[^-]+-([^.]+)\.svg/)!;
  if (!match) return;
  const emotion = match[1] as Emotion;

  if (!emotionIconMap[character]) {
    emotionIconMap[character] = {} as any;
  }
  emotionIconMap[character][emotion] = mod;
});

export function getEmotionIcon(
  character: CharacterType,
  emotion: Emotion
): FC<SVGProps<SVGSVGElement>> | undefined {
  return emotionIconMap[character]?.[emotion];
}
