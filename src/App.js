import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import './App.css';

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  console.log(flashcards);

  return (
    <div className="container">
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is question 1?',
    answer: 'a',
    options: ['a', 'b', 'c', 'd'],
  },
  {
    id: 2,
    question: 'What is question 2?',
    answer: 'b',
    options: ['a', 'b', 'c', 'd'],
  },
  {
    id: 3,
    question: 'What is question 3?',
    answer: 'c',
    options: ['a', 'b', 'c', 'd'],
  },
  {
    id: 4,
    question: 'What is question 4?',
    answer: 'd',
    options: ['a', 'b', 'c', 'd'],
  }
];

export default App;
