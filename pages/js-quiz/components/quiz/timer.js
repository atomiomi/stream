import styles from './timer.module.scss';

const Timer = ({ time }) => {
  return (
    <h1 className={`ui-pixel-title ${styles.root}`}>00:00:00</h1>
  );
};

export default Timer;
