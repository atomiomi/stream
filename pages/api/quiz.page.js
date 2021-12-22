import fetch from 'node-fetch';

const handler = async (req, res, next) => {
  try {
    const response = await fetch('https://raw.githubusercontent.com/lydiahallie/javascript-questions/master/README.md');
    let rawData = await response.text();

    rawData = rawData.replace(/^(.*?)##/s, '##');
    const sections = rawData.split('######');

    res.json({
      sections,
    });
  } catch(err) {
    console.error('Error while loading data:', err);
    res.status(500).end();
  }
};

export default handler;
