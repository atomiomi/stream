import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';
import Quiz from './components/quiz';
import Success from './components/success';
import GameOver from './components/game_over';
import Start from './components/start';
import Loading from './components/loading';
import styles from './index.module.scss';

const STATE_LOADING = 'loading';
const STATE_START = 'start';
const STATE_SUCCESS = 'success';
const STATE_FAIL = 'error';
const STATE_QUIZ = 'quiz';

const JSQuiz = () => {
  const router = useRouter();

  const modeRef = useRef();
  const startTimeRef = useRef();
  const endTimeRef = useRef();
  const [state, setState] = useState(STATE_LOADING);
  const [questions, setQuestions] = useState([]);
  const playingTime = endTimeRef.current - startTimeRef.current;

  useEffect(() => {
    if (!router.isReady) return;
    if (state !== STATE_LOADING) return;

    const fetchQuestions = async () => {
      const src = router.query.src || 'https://download1074.mediafire.com/xvkupfq21fig/hlsv040x4ci2y4c/questions.md';
      const count = router.query.count || 50;

      const response = await fetch(
        `/api/quiz?src=${encodeURIComponent(src)}&count=${encodeURIComponent(count)}`
      );

      const payload = await response.json();
      setQuestions(payload.questions)
      setState(STATE_START);
    };

    setQuestions([]);
    fetchQuestions();
  }, [state, router]);

  const handleSucess = () => {
    endTimeRef.current = Date.now();
    setState(STATE_SUCCESS);
  };

  const handleFail = () => {
    setState(STATE_FAIL);
  };

  const handleRestart = () => {
    setState(STATE_LOADING);
  };

  const handleModeSelect = (mode) => {
    modeRef.current = mode;
    startTimeRef.current = Date.now();
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
        {state === STATE_LOADING && <Loading />}
        {state === STATE_START && <Start onModeSelect={handleModeSelect} />}
        {state === STATE_QUIZ && <Quiz mode={modeRef.current} questions={questions} onSuccess={handleSucess} onFail={handleFail} />}
        {state === STATE_SUCCESS && <Success onRestart={handleRestart} time={playingTime} />}
        {state === STATE_FAIL && <GameOver onRestart={handleRestart} />}
      </div>

      <footer className={styles.footer}>
        Created by <a href="https://www.twitch.tv/atomiomi" className="ui-strong" target="_blank" rel="noopener noreferrer">atomiomi</a>
      </footer>
    </main>
  );
};

export default JSQuiz;
