import House from "../../src/assets/house.jpg";
import Kitchen from "../../src/assets/kitchen.jpg";
import Glass from "../../src/assets/glass.jpg";
export interface ProductsProps {
  title: string;
  description: string;
  image: string;
}
export const ProductsData: ProductsProps[] = [
  {
    title: "Nettoyage de la maison",
    description: "Notre service de nettoyage de la maison est conçu pour vous offrir un espace de vie impeccable et accueillant. Que vous ayez besoin d'un nettoyage régulier ou d'une remise en état complète, notre équipe de professionnels qualifiés utilise des produits et des techniques de nettoyage de haute qualité pour garantir des résultats exceptionnels. Nous prenons en charge toutes les tâches ménagères, y compris le dépoussiérage, le lavage des sols, le nettoyage des salles de bains et de la cuisine, ainsi que l'entretien des surfaces et des meubles. Profitez d'un intérieur propre et sain, sans le stress du ménage quotidien.",
    image: House,
  },
  {
    title: "Nettoyage des vitres",
    description: "Notre service de nettoyage des vitres vous assure des fenêtres impeccablement propres, offrant une vue dégagée et une lumière naturelle optimale dans votre maison ou votre bureau. Notre équipe de professionnels utilise des techniques et des équipements spécialisés pour éliminer la saleté, les traces de doigts, et les résidus de pollution sur toutes les surfaces vitrées, y compris les fenêtres à accès difficile. Que ce soit pour un nettoyage intérieur ou extérieur, nous garantissons un travail minutieux et sans traces, redonnant à vos vitres leur transparence et leur éclat d'origine. Laissez-nous prendre soin de vos vitres pour que vous puissiez profiter pleinement de la lumière et de la vue.",
    image: Glass,
  },
  {
    title: "Nettoyage de la cuisine",
    description: "Notre service de nettoyage de la cuisine est spécialement conçu pour vous offrir une cuisine étincelante et hygiénique, prête à accueillir toutes vos activités culinaires. Nos professionnels expérimentés se chargent de nettoyer en profondeur toutes les surfaces, y compris les plans de travail, les éviers, les plaques de cuisson, les hottes, les fours et les réfrigérateurs. Nous éliminons les graisses, les taches tenaces et les résidus alimentaires, tout en désinfectant les zones critiques pour assurer une propreté irréprochable. Profitez d'une cuisine propre et saine, où il fait bon cuisiner et passer du temps en famille.",
    image: Kitchen,
  },
];
