import React, { useState } from 'react';
import FlashcardList from './FlashcardList';

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  console.log(flashcards)

  return (
    <FlashcardList flashcards={flashcards} />
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is question 1?',
    answers: 'a',
    options: [
      'a',
      'b',
      'c',
      'd',
    ]
  },
  {
    id: 2,
    question: 'What is question 2?',
    answers: 'b',
    options: [
      'a',
      'b',
      'c',
      'd',
    ]
  }
]

export default App;
