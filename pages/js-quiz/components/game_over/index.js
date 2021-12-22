import styles from './index.module.scss';

const GameOver = ({ onRestart }) => {
  return (
    <article className={styles.root}>
      <style jsx global>{`
        body {
          background-color: #EA5737;
        }
      `}</style>

      <h1 className={`ui-pixel-title ${styles.title}`}>GAME OVER</h1>
      <span className="ui-game_link" onClick={onRestart}>Try again</span>
    </article>
  );
};

export default GameOver;
