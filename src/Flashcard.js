import React, { useState, useRef, useEffect } from 'react';

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);

  const frontEl = useRef();
  const backEl = useRef();

  // useEffect([flashcard.question, flashcard.answer, flashcard.options])

  return (
    <div
      className={`card ${flip ? 'flip' : ''}`} // dynamic classes
      onClick={() => setFlip(!flip)}
    >
      <div className="front" ref={frontEl}>
        {flashcard.question}
        <div className="flashcard-options">
          {flashcard.options.map((option) => {
            return (
              <div className="flashcard-option" key={option}>
                {option}
              </div>
            );
          })}
        </div>
      </div>

      <div className="back" ref={backEl}>
        {flashcard.answer}
      </div>
    </div>
  );
}
