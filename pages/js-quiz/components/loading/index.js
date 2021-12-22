import 'loaders.css/loaders.min.css';
import styles from './index.module.scss';

const Loading = () => {
  return (
    <article className={styles.root}>
      <style jsx global>{`
        body {
          background-color: #FFD772;
        }
      `}</style>

      <div className={`loader-inner pacman ${styles.loader}`}>
        <div /><div /><div /><div /><div />
      </div>

    </article>
  );
};

export default Loading;
