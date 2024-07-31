import Price from "../../src/assets/best-price.png";
import Engineer from "../../src/assets/engineer.png";
import Experience from "../../src/assets/experience.png";
import Trophy from "../../src/assets/trophy.png";
export interface ChooseDataProps {
  icon: string;
  title: string;
  description: string;
}

export const chooseData: ChooseDataProps[] = [
  {
    icon: Price,
    title: "Prix abordable",
    description:
      "Nous croyons que des services de nettoyage de haute qualité doivent être accessibles à tous.",
  },
  {
    icon: Engineer,
    title: "Equipe Professionnelle",
    description:
      "Notre équipe professionnelle est composée de spécialistes du nettoyage expérimentés",
  },
  {
    icon: Experience,
    title: "+15 ans d'expériences",
    description:
      "Avec plus de 15 ans d'expérience dans le domaine du nettoyage",
  },
  {
    icon: Trophy,
    title: "Recompenses",
    description:
      "Notre engagement envers l'excellence a été reconnu",
  },
];
