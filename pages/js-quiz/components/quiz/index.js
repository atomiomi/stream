import { useState } from 'react';
import styles from './index.module.scss';

const COLOR_BG = '#FFD772';

const Quiz = ({ questions, onSuccess, onFail }) => {
  const [index, setIndex] = useState(0);
  const question = questions[index];

  const handleClick = (option) => {
    if (question.answer === option.key) {
      if (index === questions.length - 1) onSuccess?.();
      else setIndex((prevIndex) => prevIndex + 1);
    } else {
      onFail?.();
    }
  };

  return (
    <article>
      <style jsx global>{`
        body {
          background-color: ${COLOR_BG};
        }
      `}</style>

      <div className={styles.card}>
        <h1 className={styles.title}>{question.title}</h1>

        <div className={styles.code}>
        </div>

        <div className={styles.list}>
          {question.options.map((option) => (
            <div key={option.key} className={styles.option} onClick={() => handleClick(option)}>
              <i>{option.key}</i>
              <div>{option.value}</div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Quiz;
