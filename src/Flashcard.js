import React from 'react';

export default function Flashcard({ flashcard }) {
  return (
    <div>
      {flashcard.question}
      <div className="flashcard-option">
        {flashcard.options.map((option) => {
          return (
            <div className="flashcard-option" key={option}>
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
}
