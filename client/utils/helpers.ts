export function getFormatedDate(dateString: string) {
  const date = new Date(dateString);
  const dateObj: {
    day: number | string;
    month: number | string;
    year: number | string;
  } = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };

  if (dateObj.day < 10) dateObj.day = `0${dateObj.day}`;
  if (dateObj.month < 10) dateObj.month = `0${dateObj.month}`;

  return `${dateObj.day}.${dateObj.month}.${dateObj.year}`;
}
