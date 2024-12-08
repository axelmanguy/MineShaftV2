import React, { useState } from 'react';
import { GameState } from './GameState';
import { EnigmaInfo } from './EnigmaInfo';
import { NumberSequence } from './puzzles/NumberSequence';

const ENIGMAS = [
  {
    id: 1,
    question:
      "Un mot écrit d'une main tremblante : <<La pompe est votre salut. Assemblez les engrenages avant qu’il ne soit trop tard, tout ce que je sais c'est qu'ensemble ils forment le plus grand danger de la mine.>> Le temps presse. Les engrenages doivent s'imbriquer parfaitement pour remettre en marche la pompe et stopper la montée des eaux.",
    answer: 'grisou',
  },
  {
    id: 2,
    question: "Vite ! il nous faut le nom des des puits de ventilation dans le bon ordre",
    answer: "abcd",
  },
  {
    id: 3,
    question: 'Les numeros de jetons des camarades tombés au combats ouvre la porte',
    answer: '0123456789100',
    type: 'number-sequence',
  },
  {
    id: 4,
    question: " << T2 111 2 4 >> Des hommes poussaient, une armée noire, vengeresse, qui germait lentement dans les sillons, grandissant pour les récoltes du siècle futur, et dont la germination allait faire bientôt éclater la terre",
    answer: 'rouge',
  },
];

export const Enigmas: React.FC = () => {
  const [currentEnigma, setCurrentEnigma] = useState(0);
  const [answer, setAnswer] = useState('');
  const [showFailure, setShowFailure] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showInfo, setShowInfo] = useState(true);
  
  const handleSubmit = (e: React.FormEvent | string) => {
    if (e && typeof e !== 'string') {
      e.preventDefault();
    }
    const currentAnswer = typeof e === 'string' ? e : answer.toLowerCase().trim();
    const expectedAnswer = ENIGMAS[currentEnigma].answer;
    
    if (currentAnswer === expectedAnswer) {
      setShowSuccess(true);
      setAnswer('');
      setAttempts(0);
    } else {
      setAttempts(prev => prev + 1);
      if (attempts >= 2) {
        setShowFailure(true);
      }
    }
  };

  const handleRestart = () => {
    setCurrentEnigma(0);
    setAnswer('');
    setAttempts(0);
    setShowFailure(false);
    setShowInfo(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContinue = () => {
    setCurrentEnigma(prev => prev + 1);
    setShowSuccess(false);
    setShowInfo(true);
  };
  
  if (currentEnigma >= ENIGMAS.length) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 text-white p-4 sm:p-8 z-30">
        <div className="max-w-lg text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Congratulations!</h2>
          <p className="text-lg sm:text-xl mb-8">You've escaped the mine. Well done, explorer!</p>
          <button
            onClick={handleRestart}
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Start New Adventure
          </button>
        </div>
      </div>
    );
  }

  if (showFailure) {
    return <GameState type="failure" onRestart={handleRestart} />;
  }

  if (showSuccess) {
    return <GameState type="success" onContinue={handleContinue} />;
  }

  if (showInfo) {
    return <EnigmaInfo enigmaIndex={currentEnigma} onContinue={() => setShowInfo(false)} />;
  }
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white p-4 sm:p-8 z-30">
      <div className="w-full max-w-4xl bg-zinc-900/90 backdrop-blur-sm p-4 sm:p-8 rounded-lg shadow-2xl">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Enigma {currentEnigma + 1}</h2>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8">{ENIGMAS[currentEnigma].question}</p>
        
        {ENIGMAS[currentEnigma].type === 'number-sequence' ? (
          <NumberSequence onSubmit={handleSubmit} attempts={attempts} />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full p-3 bg-zinc-800/90 rounded-lg text-white border border-zinc-700 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none"
              placeholder="Enter your answer..."
            />
            {attempts > 0 && (
              <p className="text-red-500 text-sm sm:text-base">
                Incorrect answer. {3 - attempts} attempts remaining.
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Submit Answer
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
