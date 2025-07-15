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
  ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}

const modules = import.meta.glob<IconModule>(
  // emotion_home 폴더 아래에 있는 모든 .svg
  "../public/emotion_home/**/*.svg",
  {
    import: "ReactComponent",
    eager: true,
  }
);

export const emotionIconMap: Record<
  CharacterType,
  Record<Emotion, React.FC<React.SVGProps<SVGSVGElement>>>
> = {} as any;

Object.entries(modules).forEach(([path, mod]) => {
  const parts = path.split("/");
  const character = parts[parts.length - 2] as CharacterType;
  const fileName = parts[parts.length - 1]; // 'home_momo-happy.svg'
  const [, emotion] = fileName.match(/home_[^-]+-([^.]+)\.svg/)!;

  if (!emotionIconMap[character]) {
    emotionIconMap[character] = {} as any;
  }
  emotionIconMap[character][emotion as Emotion] = mod.ReactComponent;
});

export function getEmotionIcon(character: CharacterType, emotion: Emotion) {
  return emotionIconMap[character][emotion];
}
