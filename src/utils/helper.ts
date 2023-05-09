type TMakeWordEnd = (count: number, meanOne: string, meanTwo: string, meanFive: string) => string;

export const makeWordEnd: TMakeWordEnd = (count, meanOne, meanTwo, meanFive) => {
  let number = Math.abs(count);
  number %= 100;
  if (number >= 5 && number <= 20) {
    return meanFive;
  }
  number %= 10;
  if (number === 1) {
    return meanOne;
  }
  if (number >= 2 && number <= 4) {
    return meanTwo;
  }
  return meanFive;
};
