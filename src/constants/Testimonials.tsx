import Temoignage_1 from "../../src/assets/Temoignage_1.jpg";
import Temoignage_2 from "../../src/assets/Temoignage_2.jpg";
import Temoignage_3 from "../../src/assets/Temoignage_3.jpg";
import Temoignage_4 from "../../src/assets/Temoignage_4.jpg";
import Temoignage_5 from "../../src/assets/Temoignage_5.jpg";
import Temoignage_6 from "../../src/assets/Temoignage_6.jpg";
import Temoignage_7 from "../../src/assets/Temoignage_7.jpg";
import Temoignage_8 from "../../src/assets/Temoignage_8.jpg";
import Temoignage_9 from "../../src/assets/Temoignage_9.jpg";
import Temoignage_10 from "../../src/assets/Temoignage_10.jpg";
import Temoignage_12 from "../../src/assets/Temoignage_12.jpg";
import Temoignage_13 from "../../src/assets/Temoignage_13.jpg";

export interface TestimonialsProps {
  image: string;
  fullName: string;
  role: string;
  description: string;
}

export const TestimonialsData: TestimonialsProps[] = [
  {
    image: Temoignage_1,
    fullName: 'Amina Diop',
    role: 'Client résidentiel',
    description: 'Le service de nettoyage est exceptionnel ! Ma maison n’a jamais été aussi propre et bien rangée. Je recommande vivement cette entreprise.'
  },
  {
    image: Temoignage_2,
    fullName: 'Kofi Mensah',
    role: 'Propriétaire de bureau',
    description: 'L’équipe de nettoyage est professionnelle et toujours à l’heure. Nos bureaux sont impeccables grâce à eux. Un service de haute qualité !'
  },
  {
    image: Temoignage_3,
    fullName: 'Nneka Okeke',
    role: 'Gérante de restaurant',
    description: 'Leur attention aux détails est incroyable. Notre cuisine et notre salle à manger brillent littéralement après chaque nettoyage. Merci pour votre excellent travail !'
  },
  {
    image: Temoignage_4,
    fullName: 'Thabo Khumalo',
    role: 'Propriétaire d’appartement',
    description: 'Je suis très satisfait du service de nettoyage. Ils sont fiables, minutieux et extrêmement efficaces. Je continuerai à utiliser leurs services.'
  },
  {
    image: Temoignage_5,
    fullName: 'Fatoumata Keita',
    role: 'Client régulier',
    description: 'Un service incroyable avec une équipe sympathique et professionnelle. Je suis toujours impressionnée par la propreté de ma maison après leur passage. Fortement recommandé !'
  },
  {
    image: Temoignage_6,
    fullName: 'Kwame Nkrumah',
    role: 'Directeur d’hôtel',
    description: 'Notre hôtel n’a jamais été aussi propre. Les clients remarquent la différence et apprécient le niveau de propreté. Merci pour votre excellent service !'
  },
  {
    image: Temoignage_7,
    fullName: 'Chinwe Anya',
    role: 'Propriétaire de magasin',
    description: 'Le service de nettoyage de cette entreprise est tout simplement exceptionnel. Mon magasin est toujours impeccable et accueillant pour les clients.'
  },
  {
    image: Temoignage_8,
    fullName: 'Lamine Diallo',
    role: 'Propriétaire de salle de sport',
    description: 'La propreté de notre salle de sport est essentielle pour nos membres, et cette entreprise de nettoyage fait un travail fantastique pour maintenir un environnement propre et sain.'
  },
  {
    image: Temoignage_9,
    fullName: 'Zainab Adamu',
    role: 'Directrice de crèche',
    description: 'Avec des enfants, la propreté est une priorité absolue. Nous sommes très heureux des services de nettoyage fournis, qui assurent un environnement sûr et propre pour les petits.'
  },
  {
    image: Temoignage_10,
    fullName: 'Moses Kibet',
    role: 'Propriétaire de café',
    description: 'La première impression est essentielle dans le secteur de la restauration, et grâce à cette équipe de nettoyage, notre café est toujours impeccable. Nous recevons souvent des compliments sur la propreté de notre établissement.'
  },

  {
    image: Temoignage_12,
    fullName: 'Binta Touré',
    role: 'Responsable de bureau',
    description: 'Depuis que nous avons commencé à utiliser les services de nettoyage, notre bureau est toujours propre et bien rangé. Cela crée un environnement de travail agréable et productif. Un excellent service !'
  },
  {
    image: Temoignage_13,
    fullName: 'Abdoulaye Sarr',
    role: 'Directeur d’école',
    description: 'La propreté de notre école est cruciale pour la santé et le bien-être de nos élèves. Grâce à cette entreprise de nettoyage, notre établissement est toujours impeccable. Je recommande vivement leurs services.'
  }
];
