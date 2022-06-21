import dayjs from 'dayjs';
import { FC } from 'react';

interface ComponentProps {
  dateString: string;
}

const Date: FC<ComponentProps> = ({ dateString }: ComponentProps) => {
  const date = dayjs(dateString);
  return (
    <time className="text-sm" dateTime={dateString}>
      {date.format('MMMM D, YYYY')}
    </time>
  );
};

export default Date;
