// 请求host更换
export const host = "";

const levelMap = {
  1: "高级",
  2: "中级",
  3: "初级",
};

export function getLevel(key) {
  return levelMap[key];
}

export function getImageUrl(image) {
  return `${host}${image}`;
}
