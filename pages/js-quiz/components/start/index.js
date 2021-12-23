import styles from './index.module.scss';

const modes = [
  { name: 'Easy', questionTime: 1000 * 60 * 4 },
  { name: 'Normal', questionTime: 1000 * 60 * 2 },
  { name: 'Hard', questionTime: 1000 * 60 * 0.6 },
  { name: 'Asian', questionTime: 1000 * 60 * 0.3 },
]

const Start = ({ onModeSelect }) => {
  return (
    <article className={styles.root}>
      <style jsx global>{`
        body {
          background-color: #FFD772;
        }
      `}</style>

      <h1 className={`ui-pixel-title ${styles.title}`}>SELECT DIFFICULTY</h1>

      {modes.map((mode) => (
        <div key={mode.name} className={styles.mode}>
          <span className="ui-game_link" onClick={() => onModeSelect?.(mode)}>{mode.name}</span>
        </div>
      ))}
    </article>
  );
};

export default Start;
