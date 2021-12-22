import { useEffect, useState, useRef } from 'react';
import { format } from 'date-fns';
import styles from './timer.module.scss';

const ENDING_TIME = 1000 * 15;

const Timer = ({ time, onEnd }) => {
  const startTime = Date.now();

  const [now, setNow] = useState(startTime)
  const start = useRef(startTime).current;
  const requestRef = useRef(null);

  const diff = now - start;
  const timeLeft = Math.max(0, time - diff);

  useEffect(() => {
    const loop = () => {
      setNow(Date.now());
      requestRef.current = requestAnimationFrame(loop);
    };
    loop();

    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) onEnd?.();
  }, [timeLeft, onEnd]);

  return (
    <h1
      className={`ui-pixel-title ${styles.root} ${timeLeft <= ENDING_TIME && styles.isEnding}`}
    >
      {format(timeLeft, 'mm:ss:SS')}
    </h1>
  );
};

export default Timer;
