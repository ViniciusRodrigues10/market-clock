import { useEffect } from 'react';

const updateTitleWithTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.title = `${hours}:${minutes}:${seconds} - Clock Market`;
};

const useClockTitle = () => {
  useEffect(() => {
    updateTitleWithTime();
    const intervalId = setInterval(updateTitleWithTime, 1000);

    return () => clearInterval(intervalId);
  }, []);
};

export default useClockTitle;
