import { formatToTimeZone } from 'date-fns-timezone';
export const getDate = (): string => {
  const FORMAT = 'YYYY-MM-DD HH:mm:ss';
  const TIME_ZONE_TOKYO = 'Asia/Tokyo';
  const now = formatToTimeZone(new Date(), FORMAT, {
    timeZone: TIME_ZONE_TOKYO,
  });
  return now;
};
