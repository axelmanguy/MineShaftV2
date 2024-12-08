import React from 'react';

const STORY_TEXT = ` au cœur du XIXe siècle, l’injustice règne.
Tandis que les ouvriers s’unissent pour réclamer de meilleures conditions de vie, le patron, cruel et sans pitié, complote pour écraser leur révolte.
Son plan est ignoble : les piéger au fond de la mine et laisser l’eau montante les emporter.
Mais la lumière de l’espoir brille dans l’ombre. La femme du patron, acquise à la révolution, refuse de rester passive.
En secret, elle a laissé derrière elle quatre énigmes. Résolvez-les, et elles vous guideront vers la liberté.
Travailleurs, le temps presse. La survie de vos camarades et l’avenir de la lutte sont entre vos mains.
À vous de briser vos chaînes et de prouver que rien n’arrête ceux qui se battent pour la justice !`;

export const InfoPanel: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 text-white p-8 z-40">
      <div className="max-w-2xl w-full bg-zinc-900/90 backdrop-blur-sm p-8 rounded-lg shadow-2xl">
        <h1 className="text-4xl font-bold mb-6">Entrez dans la mine</h1>
        <div className="prose prose-invert mb-8">
          <p className="text-lg leading-relaxed">{STORY_TEXT}</p>
          <div className="mt-6 space-y-4">
            <h3 className="text-xl font-semibold">Instructions:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Faites descendre l'ascenceur</li>
              <li>Resolvez les enigmes</li>
              <li>Il y a 3 tentatives par enigme</li>
              <li>Attention, en cas d'echec répétés la revolution meure avec vous</li>
            </ul>
          </div>
        </div>
        <button
          onClick={onStart}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
        >
          Commencez à descendre
        </button>
      </div>
    </div>
  );
};