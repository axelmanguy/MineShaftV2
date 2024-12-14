import React, { useState } from 'react';
import { GameState } from './GameState';
import { EnigmaInfo } from './EnigmaInfo';
import { NumberSequence } from './puzzles/NumberSequence';

const ENIGMAS = [
  {
    id: 1,
    question:
    `Un mot écrit d'une main tremblante : 
    "La pompe est votre salut. Assemblez les engrenages avant qu’il ne soit trop tard, la solution est protégée de l'eau dans une boite dorée " 
    Le temps presse. Les engrenages doivent s'imbriquer parfaitement pour remettre en marche la pompe et stopper la montée des eaux.`,
    answer: 'grisou',
  },
  {
    id: 2,
    question: "Livrez le nom de famille du traitre, il est marqué du rouge du sang des travailleurs",
    answer: "chabert",
  },
  {
    id: 3,
    question: 'Vous cherchez le code de la porte, la solution est dans le menu',
    answer: '44144418914',
    type: 'number-sequence',
  },
  {
    id: 4,
    question: `
    "son titre résonne comme une promesse : un souffle nouveau, une saison de renouveau, celle qui suit l’hiver."
    "Là, au second volet de cette fresque, à la page cent-onze, ligne deux, le quatrieme mot vous ouvre la voie"
    Au fond de la piece 4 leviers, la couleur de celui qui ouvre la voie vers la sortie est la reponse à cette derniere enigme
    `,
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Bravo !</h2>
          <p className="text-lg sm:text-xl mb-8">En actionant le levier vous accedez à un puit de ventilsation muni d'une échelle</p>
          <button
            onClick={handleRestart}
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Remonter en haut
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
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Enigmes {currentEnigma + 1}</h2>
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
              placeholder="Votre reponse"
            />
            {attempts > 0 && (
              <p className="text-red-500 text-sm sm:text-base">
                Mauvaise reponse {3 - attempts} tentatives restantes.
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Soumettre la reponse
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
