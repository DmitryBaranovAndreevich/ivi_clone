const addZero = (duration: number) => {
  if (duration < 10) {
    return `0${duration}`;
  }
  return duration;
};

export const formatDurationFilm = (duration: number) => {
  const durationHours = addZero(Math.floor(duration / 60));
  const durationMinutes = addZero(duration % 60);
  return `${durationHours} ч. ${durationMinutes} мин.`;
};
