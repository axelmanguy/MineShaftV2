import React from 'react';

const STORY_TEXT = ` Au cœur du XIXe siècle, l’injustice règne.
Tandis que les ouvriers s’unissent pour réclamer de meilleures conditions de vie, le patron, cruel et sans pitié, complote pour écraser leur révolte.
Son plan est ignoble : les piéger au fond de la mine et laisser l’eau montante les emporter.
Mais la lumière de l’espoir brille dans l’ombre. La femme du patron, acquise à la révolution, refuse de rester passive.
En secret, elle a laissé derrière elle quatre énigmes. Résolvez-les, et elles vous guideront vers la liberté.
Travailleurs, le temps presse. La survie de vos camarades et l’avenir de la lutte sont entre vos mains.
À vous de briser vos chaînes et de prouver que rien n’arrête ceux qui se battent pour la justice !`;

export const InfoPanel: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 text-white p-4 sm:p-8 z-40 overflow-y-auto">
      <div className="max-w-2xl w-full bg-zinc-900/90 backdrop-blur-sm p-4 sm:p-8 rounded-lg shadow-2xl my-4 sm:my-0">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">Descendez dans la mine ! </h1>
        <div className="prose prose-invert mb-6 sm:mb-8">
          <p className="text-base sm:text-lg leading-relaxed">{STORY_TEXT}</p>
          <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">Instructions:</h3>
            <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-sm sm:text-base">
              <li>Faites descendre l'ascenceur (scroll)</li>
              <li>Resolvez les enigmes</li>
              <li>Triomphez du grand capital</li>
            </ul>
          </div>
        </div>
        <button
          onClick={onStart}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors text-base sm:text-lg"
        >
          Commencer la descente
        </button>
      </div>
    </div>
  );
};