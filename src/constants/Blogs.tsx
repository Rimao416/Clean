import Choose_2 from "../../src/assets/choose_2.jpg";
import Choose_3 from "../../src/assets/choose_3.jpg";
import Choose_5 from "../../src/assets/choose_5.jpg";
export interface blogsProps {
  title: string;
  description: string;
  date: string;
  image: string;
}

export const blogs: blogsProps[] = [
    {
      title: "L'Importance des Témoignages dans le Développement Personnel",
      description: "Découvrez comment les témoignages peuvent influencer positivement votre croissance personnelle et professionnelle.",
      date: "2024-08-01",
      image: Choose_2
    },
    {
      title: "Les Témoignages et Leur Impact sur la Confiance en Soi",
      description: "Apprenez comment les expériences des autres peuvent renforcer votre propre confiance en vous.",
      date: "2024-07-25",
      image: Choose_3
    },
    {
      title: "Comment Partager Votre Histoire pour Inspirer les Autres",
      description: "Partagez votre parcours et devenez une source d'inspiration pour votre communauté.",
      date: "2024-07-15",
      image: Choose_5
    }
  ];