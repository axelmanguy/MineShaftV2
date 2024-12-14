import React, { useState } from 'react';
import { Elevator } from './components/Elevator';
import { MineShaft } from './components/MineShaft';
import { ParticleEffect } from './components/ParticleEffect';
import { FlameLight } from './components/FlameLight';
import { Enigmas } from './components/Enigmas';
import { DepthMeter } from './components/DepthMeter';
import { InfoPanel } from './components/InfoPanel';
import { useScrollPosition } from './hooks/useScrollPosition';

function App() {
  const [showInfo, setShowInfo] = useState(true);
  const scrollPosition = useScrollPosition();
  const showEnigmas = scrollPosition > window.innerHeight * 13;
  
  return (
    <div className="relative">
      {showInfo && <InfoPanel onStart={() => setShowInfo(false)} />}
      <Elevator />
      <DepthMeter />
      <ParticleEffect />
      <FlameLight />
      <MineShaft />
      {showEnigmas && <Enigmas />}
    </div>
  );
}

export default App;