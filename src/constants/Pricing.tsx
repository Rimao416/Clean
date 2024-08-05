export interface pricingProps {
    title: string;
    price: string;
    description: string[];
    isStandard: boolean;
  }
  
  export const pricingData: pricingProps[] = [
    {
      title: "Basic",
      price: "$19.99",
      description: [
        "Nettoyage maison hebdo",
        "Vitres mensuel",
        "Cuisine mensuel",
        "Produits écologiques",
        "Support email",
        "Réponse 24h",
        "Pas de personnalisation",
        "Contrat 3 mois"
      ],
      isStandard: false,
    },
    {
      title: "Standard",
      price: "$39.99",
      description: [
        "Nettoyage maison bi-hebdo",
        "Vitres bi-mensuel",
        "Cuisine bi-mensuel",
        "Produits écologiques",
        "Support email et téléphone",
        "Réponse 12h",
        "Personnalisation limitée",
        "Salles de bains mensuel",
        "Contrat 3 mois"
      ],
      isStandard: true,
    },
    {
      title: "Premium",
      price: "$59.99",
      description: [
        "Nettoyage maison hebdo",
        "Vitres hebdo",
        "Cuisine hebdo",
        "Produits écologiques premium",
        "Support complet",
        "Réponse 6h",
        "Personnalisation complète",
        "Salles de bains hebdo",
        "Tapis mensuel",
        "Appareils ménagers mensuel",
        "Espaces extérieurs mensuel",
        "Services réduits",
        "Contrat 1 mois"
      ],
      isStandard: false,
    }
  ];
  