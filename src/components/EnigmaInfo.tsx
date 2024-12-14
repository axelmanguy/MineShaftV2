import React from 'react';

const ENIGMA_INFO = [
  {
    title: "La pompe",
    description: `Alors que vous avancez dans la galerie sombre, un bruit sourd monte du fond de la mine.
    L'eau s’infiltre par les parois, formant des flaques grandissantes.
    Soudain, un cri retentit : " L'ascenseur ! Il est remonté sans nous ! ". 
    Pris de panique, vous apercevez un atelier abandonné où une vieille pompe rouillée repose au milieu de pièces éparpillées.
    Une petite boite dorée contient de quoi la reparer`,
    depth: "250 metres"
  },
  {
    title: "Les jetons",
    description: `
      Le rugissement de la pompe emplit la galerie, et l'eau reflue lentement. Mais un silence pesant s'installe.
      L'ascenseur est hors d'atteinte...
      Vous avancez dans une galerie oubliée, où le silence semble alourdi par le poids des souvenirs.
      Vous trouvez l'ancienne salle des casiers
      Les murs sont noircis par des décennies de poussière et d’oubli. 
      Face à vous, un tableau de bois usé, couvert de poussières. Des crochets rouillés pendent tristement,
      mais au sol, éparpillés, des jetons métalliques portant des noms et des numéros. 
      Sur le tableau, une inscription gravée :
      << Ici reposent les noms de ceux qui ont fait battre le cœur de la mine. Respectez leur mémoire pour trouver la sortie. >>
      Carnet des Tréfonds – 14 septembre 1837

      Ils nous ont condamnés. Neuf âmes, ensevelies vivantes sous les décombres de cette galerie maudite. Le patron ne voulait pas seulement briser notre grève : il voulait briser notre union. Et il y est presque arrivé.
      
      Parmi nous, il y avait un traître. Nous en avions des soupçons avant même que la terre ne se referme sur nous, mais nous n’avons jamais osé le croire. Si vous lisez ces lignes, c’est à vous de comprendre. Nos jetons sont suspendus sur le mur près de l’entrée – cherchez le clou rouge.
      
      Voici ce que nous savons :
      
      Au matin, le contremaître a hurlé : « Pierre, François, 392 et 21, en bas ! Pas le temps de traîner ! » Ces deux-là ont obéi sans un mot, comme toujours.
      Jean-Baptiste et Louis étaient souvent mis ensemble pour surveiller les couloirs. « 447 et 971, veillez à ce que tout reste en ordre, » disait-il. Ils ne s’écartaient jamais l’un de l’autre.
      Émile et Jules, inséparables, discutaient de leurs rêves de vie meilleure. L’un portait 508, l’autre 838, mais ils échangeaient tellement leurs outils qu’il était difficile de les distinguer.
      Charles et Alphonse, qu’on appelait parfois « les petits gars », avaient toujours leurs jetons suspendus côte à côte, 278 et 51. Ils étaient modestes, mais courageux.
      Et Henri... Henri était là, discret, presque effacé. Mais il avait une façon étrange de disparaître quand les choses se compliquaient. On ne lui confiait jamais de tâche essentielle, et pourtant, il savait toujours où être. Son jeton, 102, nous a longtemps semblé... banal. Jusqu’au jour où il a dit cette phrase troublante : « Peut-être que tout cela n’en vaut pas la peine... »
      
      Nous avons pris une décision collective. Le jeton 102 a été marqué d’un clou rouge, un acte de défiance, juste au cas où nos soupçons s’avéraient vrais. Mais nous n’avions pas de preuves.
      
      Si vous lisez ce carnet, cherchez ce jeton. Reconstituez nos vies, nos noms, nos numéros. Vous saurez alors qui nous étions. Et, peut-être, vous comprendrez ce qui nous a trahis.
      
      Jean-Baptiste Morel, au nom de mes camarades.
    `,
    depth: "450 metres"
  }, 
  {
    title: "Le menu",
    description:`
     En ouvrant le casier du traitre Henri vous trouvez une lampe à essence.
     Au fond de la piece, de l'air frais semble sortir d'un des casier fermé par un cadenas à chiffre. 
     
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
    Les rayonnages poussiéreux abritent des ouvrages révolutionnaires, symboles d’espoir et de lutte. 
    Sur une table, un carnet à la couverture écornée attire votre attention : 
    Carnet des Tréfonds – 14 septembre 1887

    L’espoir persiste, même dans les ténèbres les plus profondes. 
    Alors que la mine semble vouloir nous engloutir, une lueur inattendue nous parvient.
    Une phrase mystérieuse dites avant de descendre pourrait contenir la clé de notre survie :
    "Cherchez dans l’œuvre où la mine devient symbole, où la lutte jaillit des entrailles de la terre.
    Là, au second volet de cette fresque, à la page cent-onze, ligne deux, le quatrieme mot vous ouvre la voie"

    Nous savons qu'il s'agit d'une œuvre qui a  marqué bien des esprits
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
        <div className="mb-3 sm:mb-4 text-amber-400 text-sm sm:text-base">Depth: {info.depth}</div>
        <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4">{info.title}</h2>
        <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">{info.description}</p>
        <button
          onClick={onContinue}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors text-base sm:text-lg"
        >
          Examine the Riddle
        </button>
      </div>
    </div>
  );
};