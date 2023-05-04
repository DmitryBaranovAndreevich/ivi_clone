const deleteZero = (duration: string) => {
  return Number(duration);
};

export const formatDurationFilm = (duration: string) => {
  const durationArr = duration.split(':');
  const durationHours = deleteZero(durationArr[0]);
  const durationMinutes = durationArr[1];
  return `${durationHours} ч. ${durationMinutes} мин.`;
};
