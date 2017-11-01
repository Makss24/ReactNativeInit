# Containers

Les containers sont généralement utilisé en tant que vue. Ils font ensuite appel aux composants pour se construire.

Les containers sont dit "smart" car c'est eux qui récupèrent et traitent directement le state Redux.

`App.js` est le fichier appelé directement par l'index ios et android.
C'est ici qu'est initialisé et passé le State de l'application au travers de son container. Dans une version plus poussé, est aussi ici que serait initialisé tout autre module "global" de l'application.

`RootContainer.js` est le premier container appelé par `App.js` est c'est lui qui fera ensuite appel à tous les autres composants tel que la navigation par exemple.