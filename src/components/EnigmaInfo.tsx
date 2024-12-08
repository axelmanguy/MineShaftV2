import React from 'react';

const ENIGMA_INFO = [
  {
    title: "La pompe",
    description: "Alors que vous avancez dans la galerie sombre, un bruit sourd monte du fond de la mine. L'eau s’infiltre par les parois, formant des flaques grandissantes. Soudain, un cri retentit : << L'ascenseur ! Il est remonté sans nous ! >>. Pris de panique, vous apercevez un atelier abandonné où une vieille pompe rouillée repose au milieu de pièces éparpillées. Cloué au mur, un schéma griffonné à la hâte attire votre attention.",
    depth: "150 meters"
  },
  {
    title: "Le chemin oublié",
    description: "Le rugissement de la pompe emplit la galerie, et l'eau reflue lentement. Mais un silence pesant s'installe. L'ascenseur est hors d'atteinte, et les parois suintent toujours une menace silencieuse. En fouillant la petite pièce où la pompe se trouvait, l’un d’entre vous découvre une étagère branlante, couverte de livres poussiéreux. Au centre de l'étagère, un volume semble plus récent, ses pages cornées d’un usage intense. Gravé sur la couverture : << Plan des galeries – Section des Veines Est.>>. À l’intérieur, des notes manuscrites d’une écriture nerveuse : << Le passage des oubliés… Une issue vers la lumière… Un chemin pour ceux qui savent lire entre les lignes.>> Les pages sont parsemées de croquis, de coordonnées, et de détails cryptiques. En recoupant les informations, vous devrez trouver le chemin qui mène à une ancienne sortie de secours oubliée",
    depth: "300 meters"
  },
  {
    title: "Les jetons",
    description: "Vous avancez dans une galerie oubliée, où le silence semble alourdi par le poids des souvenirs. Les murs sont noircis par des décennies de poussière et d’oubli. Au détour d’un couloir, vous découvrez une pièce où le temps semble s’être arrêté. Face à vous, un tableau de bois usé, couvert de poussières. Des crochets rouillés pendent tristement, mais au sol, éparpillés, des jetons métalliques portant des noms et des numéros. Sur le tableau, une inscription gravée : << Ici reposent les noms de ceux qui ont fait battre le cœur de la mine. Respectez leur mémoire pour trouver la sortie.>> Les jetons appartenaient aux leaders syndicaux morts dans l’éboulement. Vous devez replacer chaque jeton à sa place sur le tableau, en respectant l’ordre de leur arrivée ce jour-là. Une vieille feuille tachée, coincée dans un coin de la pièce, contient un fragment de l’horaire de travail et quelques indices laissés par un survivant.",
    depth: "450 meters"
  },
  {
    title: "Le livre des secrets",
    description: "Lorsque le dernier jeton trouve sa place, un mécanisme se met en marche dans un grondement sourd. Une portion de la paroi s’écarte, dévoilant une pièce secrète. À l’intérieur, des étagères regorgent de livres soigneusement alignés. Les rayonnages poussiéreux abritent des ouvrages révolutionnaires, symboles d’espoir et de lutte. Sur une table, un carnet à la couverture écornée attire votre attention. Il est signé d’une écriture élégante : <<Pour ceux qui croient encore à la liberté, je vous offre une chance.>> Un mot griffonné suit : << 153, 2  4. Là se trouve la clé de votre salut.>>",
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