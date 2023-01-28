/* eslint-disable */
import { useEffect, useState } from 'react';

export default function Timer({
  totalTime,
  status,
  saveTimerTime,
  _id,
}) {
  const [fullTime, setFullTime] = useState(totalTime);
  const [isPaused, setIsPaused] = useState(true);
  const timerMin = Math.floor(+fullTime / 60);
  const timerSec = Math.floor(+fullTime % 60);

  function handleStart() {
    setIsPaused(false);
  }

  function handleStop() {
    setIsPaused(true);
  }

  useEffect(() => {
    if (!status) setIsPaused(true); /// это позволяет кликнув на сделано остановить таймер и не запустить его при клике еще раз
    const interval = setInterval(() => {
      if ((!isPaused, status)) {
        setFullTime((fullTime) => (fullTime >= 1 ? fullTime - 1 : 0));
      }
    }, 1000);
    if (fullTime === 0) setIsPaused(true);
    if (isPaused) clearInterval(interval); // без этого таймер сходу идет
    saveTimerTime(_id, fullTime); /// фиксирует кажду секунду в локалку, норм юзабилити

    return () => {
      clearInterval(interval);
    };
  }, [isPaused, fullTime, status]);

  return (
    <>
      <span className="timer__buttons">
        <button
          aria-label="button play"
          className="icon icon-play"
          type="button"
          onClick={() => handleStart()}
        />
        <button
          aria-label="button pause"
          className="icon icon-pause"
          type="button"
          onClick={() => handleStop()}
        />
      </span>
      <span className="timer__text">
        {timerMin >= 10 ? timerMin : '0' + timerMin}:
        {timerSec >= 10 ? timerSec : '0' + timerSec}
      </span>
    </>
  );
}
