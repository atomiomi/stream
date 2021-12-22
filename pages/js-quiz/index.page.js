import { useState } from 'react';
import Head from 'next/head';
import Quiz from './components/quiz';
import styles from './index.module.scss';

const STEP_QUIZ = 'quiz';

const sampleQuestions = [
  {
    code: '',
    title: 'What\'s the output?',
    answer: 'A',
    options: [
      { key: 'A', value: 'Target > Capturing > Bubbling' },
      { key: 'B', value: 'Target > Capturing > Bubbling' },
      { key: 'C', value: 'Target > Capturing > Bubbling' },
      { key: 'D', value: 'Target > Capturing > Bubbling' },
    ]
  },
  {
    code: '',
    title: 'What\'s the output???',
    answer: 'B',
    options: [
      { key: 'A', value: 'Capturing > Capturing > Bubbling' },
      { key: 'B', value: 'Target > Capturing > Bubbling' },
      { key: 'C', value: 'Target > Capturing > Bubbling' },
      { key: 'D', value: 'Target > Capturing > Bubbling' },
    ]
  }
];

const JSQuiz = () => {
  const [step, setStep] = useState(STEP_QUIZ);

  const handleSucess = () => {
    console.info('SUCCESS');
  };

  const handleFail = () => {
    console.info('FAILED');
  };

  return (
    <main className={styles.root}>
      <style jsx global>{`
        html,
        #__next,
        body {
          height: 100%;
        }
      `}</style>

      <Head>
        <title>JavaScript Quiz</title>
        <meta name="description" content="JavaScript Quiz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.content}>
        {step === STEP_QUIZ && <Quiz questions={sampleQuestions} onSuccess={handleSucess} onFail={handleFail} />}
      </div>

      <footer className={styles.footer}>
        Created by <a href="https://www.twitch.tv/atomiomi" className="ui-strong" target="_blank" rel="noopener noreferrer">atomiomi</a>
      </footer>
    </main>
  );
};

export default JSQuiz;
