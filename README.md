                              MUGEN TATOO

                           PROJET FIN D'ANNÉE
          -------------------------------------------------


pour lancer le serveur :

- cd backend
- npm start

pour compiler sass :

- nouveau terminal
- cd frontend
- sass --watch --style=compressed scss/index.scss css/style.css


          ------------------------------------------------------


index.html : ✅
FAQ.html :  ✅
Reservation.html :  ✅
Responsive :  ✅


          -----------------------------------------------------
           
                         TODO Liste :  
                        --------------

    1. Finir les commentaires
    7. Voir pour rajouter une nouvelle fonctionnaliter 
    8. Mettre le code au propre    



         --------------------------------------------------------    


Definition :

Fetch :

Fetch est une fonctionnalité intégrée à JavaScript qui est disponible dans les navigateurs modernes, tandis qu'Axios est une bibliothèque JavaScript qui peut être utilisée dans les navigateurs et les applications Node.js.

Fetch prend en charge les requêtes de type "flux" (streaming), tandis qu'Axios ne le fait pas.

Axios prend en charge les requêtes de type "interception" (interception) et permet de définir des intercepteurs pour les requêtes et les réponses globales, tandis que Fetch ne le fait pas.

Axios prend en charge un système de gestion des erreurs plus complet, avec des fonctionnalités telles que la gestion des erreurs par défaut et la possibilité de définir des erreurs spécifiques pour chaque requête. Fetch ne fournit pas ces fonctionnalités.

Axios permet de gérer les requêtes asynchrones de manière plus simple avec la gestion des promesses, tandis que Fetch utilise les promesses par défaut.

En résumé, Fetch est une fonctionnalité intégrée à JavaScript qui est très simple à utiliser et qui peut suffire pour de nombreux cas d'utilisation, mais Axios offre des fonctionnalités supplémentaires telles que la gestion des erreurs, les intercepteurs de requêtes, et une gestion des promesses plus simple pour gérer les requêtes asynchrones.




reducer :

En programmation, un "reducer" est une fonction qui prend en entrée deux arguments :

l'état courant (ou précédent) d'une application ou d'une partie de celle-ci,
une action, qui décrit une modification à apporter à cet état.
Le reducer utilise ces deux entrées pour retourner un nouvel état qui prend en compte la modification décrite par l'action.

Les reducers sont souvent utilisés dans les applications basées sur Redux, un framework JavaScript pour gérer l'état global d'une application. Dans un application Redux, tous les états de l'application sont stockés dans un seul objet appelé store, et chaque modification de l'état de l'application est décrite par une action qui est passée à un ou plusieurs reducers pour mettre à jour l'état de l'application.

Les reducers sont des fonctions pure, c'est-à-dire qu'ils ne modifient pas directement l'état en entrée et retournent toujours un nouvel état.


useeffect :

useEffect est une fonction de hook (ou crochet) React qui permet de gérer les effets de bord dans les composants React. Il est utilisé pour synchroniser des aspects du composant avec des modifications de données qui ont lieu en dehors du composant (comme des appels API, des écouteurs d'événements, etc.).

useEffect est utilisé pour remplacer les fonctions de cycle de vie classiques telles que componentDidMount, componentDidUpdate, et componentWillUnmount qui étaient utilisées dans les composants React classiques.


usestate :

useState est un crochet de React qui permet à un composant de suivre une variable d'état. Il est utilisé pour ajouter de l'état à des composants fonctionnels, qui n'ont pas accès au mot-clé this et ne peuvent pas utiliser la méthode setState basée sur les classes. useState renvoie un tableau avec deux éléments: la valeur actuelle de l'état, et une fonction qui peut être utilisée pour mettre à jour la valeur de l'état. La valeur initiale de l'état est passée en argument à useState.


hook :

En React, un crochet est une fonction spéciale qui permet aux composants fonctionnels d'utiliser l'état et d'autres fonctionnalités des composants de React basés sur les classes. Les crochets sont un moyen de "s'accrocher" à la fonctionnalité de React et de gérer l'état, le cycle de vie et le contexte des composants. Les crochets ne fonctionnent pas à l'intérieur des classes - ils vous permettent d'utiliser les fonctionnalités de React sans écrire une classe. Ils sont nommés en commençant par le mot "use", comme useState, useEffect, useContext et useReducer entre autres.

Les crochets vous permettent d'utiliser l'état et les autres fonctionnalités de React dans les composants fonctionnels, plutôt que de devoir écrire un composant de classe. Cela facilite le partage de la logique des composants et évite les hiérarchies de composants complexes.


API :

API signifie Interface de Programmation d'Application. Il s'agit d'un ensemble de règles et de protocoles qui permettent à différents systèmes logiciels de communiquer entre eux. Une API définit comment un développeur peut accéder à un service ou à une ressource, comme une base de données ou un service cloud, et comment récupérer ou manipuler des données.

Les API sont utilisées pour permettre aux développeurs tiers d'accéder et d'utiliser les fonctionnalités d'un service ou d'une application, sans avoir accès à son code ou à son infrastructure sous-jacent. Cela permet la création de nouvelles applications ou l'intégration d'applications existantes avec d'autres systèmes.

Les API sont généralement accessibles sur Internet en utilisant HTTP (Hypertext Transfer Protocol) et peuvent renvoyer des données dans une variété de formats tels que XML ou JSON.


Un "Bearer Token" est un JSON Web Token dont le rôle est d'indiquer que l'utilisateur qui accède aux ressources est bien authentifié

Node est le runtime qui permet l'exécution de JavaScript côté serveur.

Cette ligne de code permet de charger et d'importer la bibliothèque JavaScript axios dans votre projet. La source du fichier axios.min.js est spécifiée à l'URL https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js.

axios est une bibliothèque JavaScript populaire qui facilite les appels HTTP, tels que les requêtes AJAX, depuis les applications Web. Elle est souvent utilisée pour les applications React ou d'autres frameworks front-end pour communiquer avec les API back-end.

L'URL spécifiée dans la ligne de code est un lien direct vers une copie hébergée sur un serveur de distribution de contenu (CDN) pour une utilisation immédiate. La version minimifiée de axios est utilisée pour une charge plus rapide sur le réseau.

Terminal dans le fichier src puis "npx babel input.jsx --out-file output.js" pour compiler le fichier en js

Le code "await Images.create(images)" est utilisé pour créer une ou plusieurs entrées dans une base de données MongoDB à l'aide du modèle "Images".

"await" est utilisé pour attendre la résolution d'une promesse (promise) retournée par la méthode "create" avant de poursuivre l'exécution du code.

"Images" est un modèle défini à l'aide de la bibliothèque Mongoose pour MongoDB qui permet de définir la structure des données stockées dans la base de données.

"create" est une méthode fournie par Mongoose qui permet de créer une ou plusieurs entrées dans la base de données en utilisant les données passées en paramètre. Ici, les données passées en paramètre sont contenues dans la variable "images".

En résumé, ce code crée de nouvelles entrées dans la base de données MongoDB en utilisant les données contenues dans la variable "images" en utilisant le modèle "Images". Le mot-clé "await" est utilisé pour attendre la résolution de la promesse retournée par la méthode "create".


En React, un middleware (ou "middleware" en français) est une fonction qui se place entre l'action (ou l'événement) et le reducer (ou le gestionnaire de l'état) dans le flux de données.

Plus précisément, un middleware est un élément qui intercepte une action avant qu'elle n'atteigne le reducer et qui peut la modifier, la rejeter ou la transmettre telle quelle.

npx babel src -d lib
npx babel src/index.js -o lib/index.js