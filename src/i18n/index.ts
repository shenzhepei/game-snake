import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { readLanguage } from "./language";

const resources = {
  en: { translation: {
    title: "Garden Snake", subtitle: "Classic movement. One more apple.", score: "Score", best: "Best",
    difficulty: "Speed", calm: "Calm", classic: "Classic", rapid: "Rapid", start: "Start game",
    resume: "Resume", pause: "Pause", restart: "Restart", ready: "Ready?", readyText: "Use arrow keys, WASD, or the controls below.",
    paused: "Paused", pausedText: "The garden can wait.", over: "Run over", overText: "You scored {{score}} points.",
    controls: "Direction controls", language: "Language", newBest: "New best",
  } },
  "zh-CN": { translation: {
    title: "花园贪吃蛇", subtitle: "经典移动，再吃一个苹果。", score: "得分", best: "最高分",
    difficulty: "速度", calm: "悠闲", classic: "经典", rapid: "极速", start: "开始游戏",
    resume: "继续", pause: "暂停", restart: "重新开始", ready: "准备好了吗？", readyText: "使用方向键、WASD 或下方按钮控制。",
    paused: "游戏暂停", pausedText: "花园会等你回来。", over: "本局结束", overText: "本局获得 {{score}} 分。",
    controls: "方向控制", language: "语言", newBest: "新的最高分",
  } },
};
void i18n.use(initReactI18next).init({ resources, lng: readLanguage(), fallbackLng: "en", interpolation: { escapeValue: false } });
export default i18n;
