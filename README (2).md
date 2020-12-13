# Hackerflix and chill
## Consignes de base
- utiliser notre [seed parcel](https://github.com/ltruchot/parcel-seed-js-eslint-sass) 
  - `git clone https://github.com/ltruchot/parcel-seed-js-eslint-sass`
  - renommer ce dossier "hackerflix", l'ouvrir avec VSCode, supprimer ".git" à la racine
  - ouvrir un terminal, puis
    - `npm install`
    - `npm start`
  - ouvrir le navigateur sur http://localhost:1234 
- clean le projet
  - dé-commenter le lien vers bootstrap dans styles.scss
  - supprimer les mentions de jquery et bootstrap dans script.js
  - supprimer le html inutile (mais garder la div#app)
- **interdit de toucher le HTML** durant tout le reste de l'exercice: tout le HTML apparaît dans la div#app !
  
## Description du challenge

### Javascript statique
- Nous faisons un site pour les fans de films qui parlent de "hacking"
- La page est juste une grande mosaïque de jaquettes de films, un peu comme Netflix en plus simple
- utiliser les données présentes dans [movies.js](https://github.com/ltruchot/es3-to-esnext-challenges/blob/master/007-hackerflix/movies.js)
  - les exporter depuis un fichier
  - les importer dans votre script.js
- copier le dossiers `posters` dans votre dossier `static` (voici un [lien de téléchargement](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/ltruchot/es3-to-esnext-challenges/tree/master/007-hackerflix/posters))
- tous les "posters imbd" des films sont visibles sur votre page d'accueil dans un grand container en "flex-wrap"
- ATTENTION: certains film n'ont pas de "poster" (leur propriété `img` est alors à `false`). Dans ce cas, un rectangle coloré remplace l'image, et le titre du film est écrit dans ce rectangle

### Javascript dynamique
- cliquer sur un "poster" ouvre une popup: une div centrée, au dessus des élements, en position fixed
- Cette popup affiche toutes les infos disponibles pour le film cliqué
- Cette popup contient un bouton "fermer": cliquer dessus la cache de nouveau
- On peut bien sûr retrouver cette popup plusieurs fois d'affilé, en cliquant sur différents films
- Il y a un bouton en haut du site: "Recent film only"
- Cliquer dessus cache toutes les jaquettes de films réalisés avant l'an 2000

## Bonus (non compté dans l'épreuve JS)
- Un champ "select" permet de fitrer les films par genre: on choisit son genre et on ne voit plus que les films concernés
- le premier choix dans ce select est "tout voir", pour pouvoir revenir à l'état initial
- un autre select permet de classer les films par "notes", décroissantes ou croissantes (le filtre de genre reste actif)
- En haut du site, un petit carousel "mets en avant" 10 films piochés au hasard (3 visibles, 7 invisibles, qui tournent dans le carousel)
- Toutes les jaquettes ont une petite icône "coeur vide": cliquer dessus le rempli et vice-versa (sans ouvrir la popup)
- "aimer" des films (en cliquant sur ce coeur) change dynamiquement le contenu des "mises en avant" du carousel
  - selon les goûts de l'utilisateur, uniquement des films du même "genre" sont proposés dans le carousel
- L'état de l'app est enregistré dans le localStorage
- Tout ça est beau, original, ergonomique et responsive

> Workshop librement inspiré du site [hackermovie.club](https://hackermovie.club/)
