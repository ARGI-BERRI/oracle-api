/**
 * 運勢: 運勢の重み
 */
type Fate = { [key: string]: number };

export const fate: Fate = {
  大吉: 1,
  中吉: 2,
  吉: 3,
  小吉: 4,
  末吉: 3,
  凶: 2,
  大凶: 1,
};

export const funnyFate: Fate = {
  // 曖昧な奴
  "😊それなり": 3,
  "🙂そこそこ": 3,
  "😰まるで駄目": 3,
  "🐙まるでタコ": 3,
};
