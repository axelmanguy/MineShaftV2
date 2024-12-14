import React from 'react';

const ENIGMA_INFO = [
  {
    title: "La pompe",
    description: `Alors que vous avancez dans la galerie sombre, un bruit sourd monte du fond de la mine.
    L'eau s’infiltre par les parois, formant des flaques grandissantes.
    Soudain, un cri retentit : " L'ascenseur ! Il est remonté sans nous ! ". 
    Pris de panique, vous apercevez un atelier abandonné où une vieille pompe rouillée repose au milieu de pièces éparpillées.
    Une petite boite dorée au bord de l'eau qui monte contient le code à dechiffrer pour la reparer`,
    depth: "250 metres"
  },
  {
    title: "Les jetons",
    description: `
      Le rugissement de la pompe emplit la galerie, et l'eau reflue lentement. Mais un silence pesant s'installe.
      Vous avancez dans une galerie oubliée vers l'ancienne salle des casiers
      Les murs sont noircis par des décennies de poussière et d’oubli. 
      Face à vous, un tableau de bois usé, couvert de poussières. Des crochets rouillés pendent tristement,
      mais au sol, éparpillés, des jetons métalliques portant des noms et des numéros et un extrait de journal de la derniere grève brutallement reprimée.          
      Reconstituez leurs vies, leurs noms, leurs numéros. Vous saurez alors qui ils étaient.
      Vous devez demasquer le traitre d'alors.
    `,
    depth: "450 metres"
  }, 
  {
    title: "Le menu",
    description:`
    En ouvrant le casier du traître Henri, vous découvrez une boîte d'allumettes, mais leur flamme vacille et s'éteint sous l'effet d'un souffle de vent.
    Au fond de la pièce, un courant d'air frais semble provenir d'un casier fermé par un cadenas à combinaison.
     
     Prés de ce casier un nouveau segment du journal : 

     Carnet des Tréfonds – 14 septembre 1887

     Nous pensions que tout était perdu, mais un mince espoir nous est parvenu, glissé dans l’ombre.
     Madame de la Tour, la femme du propriétaire, a toujours semblé distante mais peut-être partage-t-elle nos rêves d’un monde plus juste...
     Avant que la mine ne devienne notre tombe, un de nos camarades, Louis, a rapporté un curieux menu trouvé près des boîtes de thé 
     dans l’entrepôt. C’était celui du banquet de leur mariage, un souvenir sans doute oublié.
     Mais en examinant de près ce papier jauni, nous avons remarqué des annotations étranges, 
     comme si quelqu’un voulait y dissimuler un message.
    
     Le code laissée par elle doit nous ouvrir la porte d'une piece secrète de la mine
     `,
     depth: "300 metres"
  }, 
  {
    title: "Le livre des secrets",
    description: `Lorsque le dernier chiffre trouve sa place, vous ouvrez la porte du casier.
    Il s'agit en fait d'un passage vers une piece secrete où les precedents meneurs de la greve preparait la revolution
    A l’intérieur, des étagères regorgent de livres soigneusement alignés.
    Sur une table, un carnet à la couverture écornée attire votre attention : 
    Carnet des Tréfonds – 14 septembre 1887
    Alors que la mine semble vouloir nous engloutir, une lueur inattendue nous parvient.
    Une phrase mystérieuse de Mme de la tour me revient en memoire :
    "Cherchez dans l’œuvre où la mine devient symbole, où la lutte jaillit des entrailles de la terre.
    Là, au second volet de cette fresque, à la page cent-onze, ligne deux, le quatrieme mot vous ouvre la voie"

    Nous savons de quel livre il s’agit, car son titre résonne comme une promesse : un souffle nouveau, une saison de renouveau, celle qui suit l’hiver.
    Si quelqu’un lit ce carnet, suivez cette piste. Le mot que vous trouverez sera peut-être la clé qui ouvrira les portes de cette prison.`,
    depth: "600 metres"
  }
];

interface EnigmaInfoProps {
  enigmaIndex: number;
  onContinue: () => void;
}

export const EnigmaInfo: React.FC<EnigmaInfoProps> = ({ enigmaIndex, onContinue }) => {
  const info = ENIGMA_INFO[enigmaIndex];
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 text-white p-4 sm:p-8 z-30 overflow-y-auto">
      <div className="max-w-2xl w-full bg-zinc-900/90 backdrop-blur-sm p-4 sm:p-8 rounded-lg shadow-2xl my-4 sm:my-0">
        <div className="mb-3 sm:mb-4 text-amber-400 text-sm sm:text-base">Profondeur: {info.depth}</div>
        <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4">{info.title}</h2>
        <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">{info.description}</p>
        <button
          onClick={onContinue}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors text-base sm:text-lg"
        >
          Examiner la nouvelle enigme
        </button>
      </div>
    </div>
  );
};