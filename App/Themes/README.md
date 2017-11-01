# Themes

L'idée de ce conteneur est de rassembler toutes les variables de style globale à l'application.
Ces variables pourront ensuite être rappelée depuis d'autre feuille de style pour récupérer un mode en style en cascade mais en gardant un contrôle minimal de pouvoir récupérer seulement ce dont nous avons besoin.

Exemples :
* Colors - Définition des variables de couleur suivant la charte graphique de l'application
* Fonts - Définition des tailles de la même manière que des titres HTML (h1, h2, ...), des types de police, ...
* Images - Rassemblement des urls plutôt qu'avoir à récupérer le chemin de l'image à chaque fois
* Metrics - Dimension des containers, blocs et éléments
* ApplicationStyles - Etablissement d'un style principal où les variables peuvent être rappelé directement.

`index.js` de ce répertoire permet d'exporter tous les objets de ce répertoire dans devoir cibler un seul document quand il y en a besoin ailleurs.
