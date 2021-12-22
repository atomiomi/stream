import styles from './index.module.scss';

const Success = ({ time }) => {
  return (
    <article className={styles.root}>
      <style jsx global>{`
        body {
          background-color: #9DF076;
        }
      `}</style>

      <h1 className={`ui-pixel-title ${styles.title}`}>YOU WON!!!</h1>
      Your time: 23min
    </article>
  );
};

export default Success;
