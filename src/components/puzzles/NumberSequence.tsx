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
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="w-full md:w-2/3">
        <div className="grid grid-cols-13 gap-2 mb-6">
          {digits.map((digit, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-12 w-full border-2 rounded-md flex items-center justify-center text-xl font-bold cursor-pointer
                ${index === currentIndex ? 'border-amber-500' : 'border-zinc-700'}
                ${digit ? 'bg-zinc-800' : 'bg-zinc-900'}`}
            >
              {digit}
            </div>
          ))}
        </div>
        <div className="text-sm text-amber-400 mb-4">
          Complete the sequence: 2-4-6-8-10-12-?
        </div>
        {attempts > 0 && (
          <p className="text-red-500 mb-4">
            Incorrect sequence. {3 - attempts} attempts remaining.
          </p>
        )}
      </div>
      
      <NumberKeypad
        onDigitClick={handleDigitInput}
        onDelete={handleDelete}
        onSubmit={handleSubmit}
        disabled={digits.some(d => d === '')}
      />
    </div>
  );
};