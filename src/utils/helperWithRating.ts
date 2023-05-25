export const getIntegerAndFractionRate = (rating: string) => {
  const rate = rating.split('.');
  const rateInteger = rate[0] ?? 0;
  const rateFraction = rate[1] ?? 0;
  return { rateInteger, rateFraction };
};
