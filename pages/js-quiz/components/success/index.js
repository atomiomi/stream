import { format } from 'date-fns';
import styles from './index.module.scss';

const Success = ({ time, onRestart }) => {
  return (
    <article className={styles.root}>
      <style jsx global>{`
        body {
          background-color: #9DF076;
        }
      `}</style>

      <h1 className={`ui-pixel-title ${styles.title}`}>YOU WON!!!</h1>
      <div>Your time: { format(time, `m 'minutes' s 'seconds'`) }</div>

      <span className={`ui-game_link ${styles.restart}`} onClick={onRestart}>Play again</span>
    </article>
  );
};

export default Success;
