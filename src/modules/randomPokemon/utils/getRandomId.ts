export const getRandomInt = (min: number = 1, max: number = 400): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
