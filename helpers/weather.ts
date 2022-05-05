import {cloudyBg, defaultBg, rainyBg, sunnyBg} from '../assets/images';

enum Conditions {
  Clouds,
  Clear,
  Rain,
}

type Condition = keyof typeof Conditions;

type ConditionImage = {
  [key in Condition]?: any;
};

export function getWeatherConditionBackground(condition: Condition | string) {
  const weatherCondition = condition as Condition;
  const images: ConditionImage = {
    Clouds: cloudyBg,
    Clear: sunnyBg,
    Rain: rainyBg,
  };

  return images[weatherCondition] ?? defaultBg;
}
