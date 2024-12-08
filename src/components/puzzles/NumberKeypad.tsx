import React from 'react';
import { Delete } from 'lucide-react';

interface NumberKeypadProps {
  onDigitClick: (digit: string) => void;
  onDelete: () => void;
  onSubmit: () => void;
  disabled: boolean;
}

export const NumberKeypad: React.FC<NumberKeypadProps> = ({
  onDigitClick,
  onDelete,
  onSubmit,
  disabled
}) => {
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  return (
    <div className="w-full md:w-1/3 bg-zinc-800/50 p-4 rounded-lg">
      <div className="grid grid-cols-3 gap-2">
        {digits.map((digit) => (
          <button
            key={digit}
            onClick={() => onDigitClick(digit)}
            className="p-4 bg-zinc-700 hover:bg-zinc-600 rounded-lg text-xl font-bold transition-colors"
          >
            {digit}
          </button>
        ))}
        <button
          onClick={onDelete}
          className="p-4 bg-amber-700 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors"
        >
          <Delete className="w-6 h-6" />
        </button>
        <button
          onClick={onSubmit}
          disabled={disabled}
          className={`p-4 rounded-lg text-lg font-bold col-span-2 transition-colors
            ${disabled 
              ? 'bg-zinc-700 cursor-not-allowed opacity-50' 
              : 'bg-green-700 hover:bg-green-600'}`}
        >
          Submit
        </button>
      </div>
    </div>
  );
};