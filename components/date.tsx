import React from 'react';
import dayjs from 'dayjs';

export default function Date({ dateString }: { dateString: string }) {
  const date = dayjs(dateString);
  return (
    <time className="text-sm" dateTime={dateString}>
      {date.format('MMMM D, YYYY')}
    </time>
  );
}
