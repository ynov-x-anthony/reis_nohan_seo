# SSR_SSG.md

Pour CE catalogue (quelques dizaines de produits, mis à jour occasionnellement) :

1. Choisirais-tu plutôt du SSR, du SSG, ou du pré-rendu ? Justifie en une
   ou deux phrases en t'appuyant sur la fréquence de mise à jour du contenu.

Je prendrais du SSG. Il y a seulement quelques dizaines de fiches et elles
changent rarement, donc on peut générer toutes les pages HTML une fois au
build et relancer un build quand un produit est ajouté ou modifié. Chaque
page a déjà son `<title>`, sa description et ses balises `og:*` dans le HTML
envoyé, donc les robots et les réseaux sociaux les voient sans exécuter le
JS. Pas besoin de serveur qui recalcule la page à chaque visite comme en SSR,
et les fichiers statiques sont très rapides à servir.

2. Si demain ce site affichait un **stock en temps réel** (quantité
   disponible qui change à chaque commande), ce choix changerait-il ? Pourquoi ?

Oui en partie. Avec du SSG pur le stock affiché serait celui du dernier
build, donc faux dès la première commande. Il y a deux solutions :

- passer les fiches produit en SSR pour que le stock soit dans le HTML à
  chaque requête, mais ça demande un serveur et c'est plus lent ;
- garder le SSG pour tout ce qui compte pour le SEO (nom, prix, description,
  balises meta) et aller chercher seulement le stock côté client avec un
  appel API.

Je garderais la deuxième, parce que le stock n'a pas besoin d'être indexé par
Google et que le reste de la page ne change toujours pas souvent.
