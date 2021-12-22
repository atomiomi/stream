const handler = async (req, res) => {
  res.status(200).json([
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
  ])
};

export default handler;
