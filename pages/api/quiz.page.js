import fetch from 'node-fetch';
import sampleSize from 'lodash/sampleSize';

const rules = [
  {
    name: 'title',
    regex: /^\s?\d+\.\s?(.+?)\n/,
  },

  {
    name: 'code',
    regex: /```javascript\n([\S\s\n]*?)\n```/,
  },

  {
    name: 'options',
    array: true,
    regex: /[\S\s\n]*-\sA:\s(.*?)\n/,
    modify(value) {
      return { key: 'A', value }
    },
  },

  {
    name: 'options',
    array: true,
    regex: /[\S\s\n]*-\sB:\s(.*?)\n/,
    modify(value) {
      return { key: 'B', value }
    },
  },

  {
    name: 'options',
    array: true,
    regex: /[\S\s\n]*-\sC:\s(.*?)\n/,
    modify(value) {
      return { key: 'C', value }
    },
  },

  {
    name: 'options',
    array: true,
    regex: /[\S\s\n]*-\sD:\s(.*?)\n/,
    modify(value) {
      return { key: 'D', value }
    },
  },

  {
    name: 'answer',
    regex: /[\S\s\n]*Answer:\s?([A-D])/,
  },

  {
    name: 'explanation',
    regex: /[\S\s\n]*Answer:\s?[A-D]\n\n([\S\s\n]*?)\n\n<\/p>/,
  }
];

const handler = async (req, res) => {


  try {
    const { src, count } = req.query;
    if (!src || !count) return res.status(422).end();

    const response = await fetch(src);
    let rawData = await response.text();
    rawData = rawData.replace(/^(.*?)##/s, '##');

    const questions = rawData.split('######').slice(1).map((question) => {
      return rules.reduce((acc, rule) => {
        let value = question.match(rule.regex)?.[1] || null;
        if (value === null) return acc;

        if (rule.modify) value = rule.modify(value);

        if (rule.array) {
          if (!acc[rule.name]) acc[rule.name] = [];
          acc[rule.name].push(value)
        } else {
          acc[rule.name] = value;
        }

        return acc;
      }, {});
    });

    res.json({ questions: sampleSize(questions, count) });
  } catch(err) {
    console.error('Error while loading data:', err);
    res.status(500).end();
  }
};

export default handler;
