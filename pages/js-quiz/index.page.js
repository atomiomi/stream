import { useState, useRef } from 'react';
import Head from 'next/head';
import Quiz from './components/quiz';
import Success from './components/success';
import GameOver from './components/game_over';
import Start from './components/start';
import styles from './index.module.scss';

const STATE_START = 'start';
const STATE_SUCCESS = 'success';
const STATE_FAIL = 'error';
const STATE_QUIZ = 'quiz';

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
  const modeRef = useRef();
  const [state, setState] = useState(STATE_START);

  const handleSucess = () => {
    setState(STATE_SUCCESS);
  };

  const handleFail = () => {
    setState(STATE_FAIL);
  };

  const handleRestart = () => {
    setState(STATE_START);
  };

  const handleModeSelect = (mode) => {
    modeRef.current = mode;
    setState(STATE_QUIZ);
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
        {state === STATE_START && <Start onModeSelect={handleModeSelect} />}
        {state === STATE_QUIZ && <Quiz mode={modeRef.current} questions={sampleQuestions} onSuccess={handleSucess} onFail={handleFail} />}
        {state === STATE_SUCCESS && <Success />}
        {state === STATE_FAIL && <GameOver onRestart={handleRestart} />}
      </div>

      <footer className={styles.footer}>
        Created by <a href="https://www.twitch.tv/atomiomi" className="ui-strong" target="_blank" rel="noopener noreferrer">atomiomi</a>
      </footer>
    </main>
  );
};

export default JSQuiz;
