export enum ANIME_SEASONS {
  WINTER = "Winter",
  SPRING = "Spring",
  SUMMER = "Summer",
  FALL = "Fall",
}

export const getAnimeSeason = ({ month }: { month: number }) => {
  switch (month) {
    case 0:
    case 1:
    case 2:
      return ANIME_SEASONS.WINTER;
    case 3:
    case 4:
    case 5:
      return ANIME_SEASONS.SPRING;
    case 6:
    case 7:
    case 8:
      return ANIME_SEASONS.SUMMER;
    case 9:
    case 10:
    case 11:
      return ANIME_SEASONS.FALL;
    default:
      return undefined;
  }
};
