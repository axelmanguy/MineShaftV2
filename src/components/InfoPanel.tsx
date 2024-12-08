import React from 'react';

const STORY_TEXT = `The year is 1873. You find yourself at the entrance of the abandoned Blackwood Mine. 
Local legends speak of a mysterious treasure hidden deep within its depths, but also warn of the 
dangers that await those who dare to venture too far. Armed with only an oil lamp and your wit, 
you must solve the ancient riddles left behind by the miners to uncover the truth and escape...`;

export const InfoPanel: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 text-white p-8 z-40">
      <div className="max-w-2xl w-full bg-zinc-900/90 backdrop-blur-sm p-8 rounded-lg shadow-2xl">
        <h1 className="text-4xl font-bold mb-6">Welcome to Blackwood Mine</h1>
        <div className="prose prose-invert mb-8">
          <p className="text-lg leading-relaxed">{STORY_TEXT}</p>
          <div className="mt-6 space-y-4">
            <h3 className="text-xl font-semibold">Instructions:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Scroll down to descend into the mine</li>
              <li>Watch your depth meter carefully</li>
              <li>Solve enigmas to progress deeper</li>
              <li>You have 3 attempts for each enigma</li>
              <li>Be cautious - wrong answers may trigger cave-ins!</li>
            </ul>
          </div>
        </div>
        <button
          onClick={onStart}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
        >
          Begin the Descent
        </button>
      </div>
    </div>
  );
};