export interface FaqProps {
    question: string;
    answer: string;
  }
  
  export const FaqData: FaqProps[] = [
    {
      question: "Comment puis-je créer un compte sur votre plateforme ?",
      answer: "Pour créer un compte, cliquez sur le bouton 'S'inscrire' en haut à droite de la page d'accueil. Vous devrez fournir votre adresse e-mail, créer un mot de passe et remplir quelques informations de base."
    },
    {
      question: "Comment réinitialiser mon mot de passe ?",
      answer: "Si vous avez oublié votre mot de passe, cliquez sur 'Mot de passe oublié ?' sur la page de connexion. Suivez les instructions pour réinitialiser votre mot de passe via l'e-mail que vous recevrez."
    },
    {
      question: "Puis-je modifier les informations de mon profil ?",
      answer: "Oui, vous pouvez modifier vos informations de profil en vous rendant dans la section 'Mon profil' de votre tableau de bord. Cliquez sur 'Modifier' pour mettre à jour vos informations."
    },
    {
      question: "Comment supprimer mon compte ?",
      answer: "Pour supprimer votre compte, veuillez contacter notre support client via la page de contact. Assurez-vous de mentionner que vous souhaitez supprimer votre compte et fournissez les informations nécessaires pour vérifier votre identité."
    },
    {
      question: "Quels types de paiement acceptez-vous ?",
      answer: "Nous acceptons les paiements par carte de crédit, carte de débit et PayPal. Les options disponibles peuvent varier en fonction de votre région."
    }
  ];
  