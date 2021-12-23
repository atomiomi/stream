import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Timer from './timer';
import Code from './code';
import styles from './index.module.scss';

const Quiz = ({ questions, mode, onSuccess, onFail }) => {
  const [index, setIndex] = useState(20);
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
        <ReactMarkdown className={styles.title}>{question.title}</ReactMarkdown>

        {question.code && (
          <div className={styles.code}>
            <Code value={question.code} />
          </div>
        )}

        <div className={styles.list}>
          {question.options.map((option) => (
            <div key={option.key} className={styles.option} onClick={() => handleSelect(option)}>
              <i>{option.key}</i>
              <ReactMarkdown>{option.value}</ReactMarkdown>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Quiz;
