import React, { useState } from 'react';
import { NumberKeypad } from './NumberKeypad';

interface NumberSequenceProps {
  onSubmit: (answer: string) => void;
  attempts: number;
}

export const NumberSequence: React.FC<NumberSequenceProps> = ({ onSubmit, attempts }) => {
  const [digits, setDigits] = useState<string[]>(Array(13).fill(''));
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDigitInput = (digit: string) => {
    if (currentIndex < 13) {
      const newDigits = [...digits];
      newDigits[currentIndex] = digit;
      setDigits(newDigits);
      setCurrentIndex(prev => Math.min(prev + 1, 12));
    }
  };

  const handleDelete = () => {
    if (currentIndex > 0) {
      const newDigits = [...digits];
      newDigits[currentIndex - 1] = '';
      setDigits(newDigits);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    const answer = digits.join('');
    if (answer.length === 13) {
      onSubmit(answer);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full overflow-x-auto pb-2">
        <div className="grid grid-cols-13 gap-1 sm:gap-2 min-w-max">
          {digits.map((digit, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-8 sm:h-12 w-8 sm:w-12 border-2 rounded-md flex items-center justify-center text-base sm:text-xl font-bold cursor-pointer
                ${index === currentIndex ? 'border-amber-500' : 'border-zinc-700'}
                ${digit ? 'bg-zinc-800' : 'bg-zinc-900'}`}
            >
              {digit}
            </div>
          ))}
        </div>
      </div>
      <div className="text-sm text-amber-400 mb-2">
        Complete the sequence: 2-4-6-8-10-12-?
      </div>
      {attempts > 0 && (
        <p className="text-red-500 text-sm sm:text-base mb-2">
          Incorrect sequence. {3 - attempts} attempts remaining.
        </p>
      )}
      <NumberKeypad
        onDigitClick={handleDigitInput}
        onDelete={handleDelete}
        onSubmit={handleSubmit}
        disabled={digits.some(d => d === '')}
      />
    </div>
  );
};