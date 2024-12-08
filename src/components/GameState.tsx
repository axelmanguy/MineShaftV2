import React from 'react';

interface GameStateProps {
  type: 'success' | 'failure';
  onRestart?: () => void;
  onContinue?: () => void;
}

export const GameState: React.FC<GameStateProps> = ({ type, onRestart, onContinue }) => {
  const images = {
    success: 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?auto=format&fit=crop&w=1920',
    failure: 'https://images.unsplash.com/photo-1635774855317-edf3ee4463db?auto=format&fit=crop&w=1920'
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images[type]})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      
      <div className="relative z-10 text-center text-white">
        <h2 className="text-4xl font-bold mb-8">
          {type === 'success' ? 'Well Done!' : 'Oh no...'}
        </h2>
        <p className="text-xl mb-8">
          {type === 'success' 
            ? 'You solved the enigma. Ready for the next challenge?' 
            : 'The mine is collapsing! Better try again...'}
        </p>
        <div className="space-x-4">
          {type === 'failure' && (
            <button
              onClick={onRestart}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Restart
            </button>
          )}
          {type === 'success' && (
            <button
              onClick={onContinue}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
};