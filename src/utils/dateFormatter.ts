const dateToUSADate = (date: Date): string => {
  const formatter = new Intl.DateTimeFormat('en-US');
  return formatter.format(date);
};

export { dateToUSADate };
