import React from 'react';

const ENIGMA_INFO = [
  {
    title: "The Cartographer's Chamber",
    description: "You've reached an old mapping room. Dusty charts and compasses litter the wooden tables, their brass surfaces gleaming dimly in your lamp light. A riddle is carved into the central desk.",
    depth: "150 meters"
  },
  {
    title: "The Miner's Path",
    description: "Ancient boot prints are preserved in the hardened mud before you. The walls here tell stories of countless journeys through these tunnels. Among the footprints, words have been etched into the ground.",
    depth: "300 meters"
  },
  {
    title: "The Number Wall",
    description: "You've discovered a chamber where the walls are covered in mysterious numerical sequences. The miners used this room for calculations and measurements. One sequence stands out, demanding your attention.",
    depth: "450 meters"
  },
  {
    title: "The Time Chamber",
    description: "In this deepest chamber, old mechanical clocks hang frozen in time. The air is thick with mystery, and between two grand timepieces, words shimmer in the darkness.",
    depth: "600 meters"
  }
];

interface EnigmaInfoProps {
  enigmaIndex: number;
  onContinue: () => void;
}

export const EnigmaInfo: React.FC<EnigmaInfoProps> = ({ enigmaIndex, onContinue }) => {
  const info = ENIGMA_INFO[enigmaIndex];
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 text-white p-8 z-30">
      <div className="max-w-2xl w-full bg-zinc-900/90 backdrop-blur-sm p-8 rounded-lg shadow-2xl">
        <div className="mb-4 text-amber-400">Depth: {info.depth}</div>
        <h2 className="text-3xl font-bold mb-4">{info.title}</h2>
        <p className="text-lg leading-relaxed mb-8">{info.description}</p>
        <button
          onClick={onContinue}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
        >
          Examine the Riddle
        </button>
      </div>
    </div>
  );
};