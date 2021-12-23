import { memo } from 'react';
import hljs from 'highlight.js';
import styles from './code.module.scss';
import 'highlight.js/styles/github-dark.css';

const Code = memo(({ value }) => {
  const html = hljs.highlight(value, { language: 'javascript' }).value

  return (
    <code className={styles.root} dangerouslySetInnerHTML={{ __html: html }} />
  );
});

Code.displayName = 'Code';
export default Code;
