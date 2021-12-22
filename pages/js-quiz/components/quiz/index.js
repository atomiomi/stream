import { useState } from 'react';
import Timer from './timer';
import styles from './index.module.scss';

const Quiz = ({ questions, mode, onSuccess, onFail }) => {
  const [index, setIndex] = useState(0);
  const question = questions[index];

  const handleSelect = (option) => {
    if (question.answer === option.key) {
      if (index === questions.length - 1) onSuccess?.();
      else setIndex((prevIndex) => prevIndex + 1);
    } else {
      onFail?.();
    }
  };

  return (
    <article key={index}>
      <style jsx global>{`
        body {
          background-color: #FFD772;
        }
      `}</style>

      <header>
        <Timer time={mode.questionTime} onEnd={onFail} />
      </header>

      <div className={styles.card}>
        <h1 className={styles.title}>{question.title}</h1>

        <div className={styles.code}>
        </div>

        <div className={styles.list}>
          {question.options.map((option) => (
            <div key={option.key} className={styles.option} onClick={() => handleSelect(option)}>
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
