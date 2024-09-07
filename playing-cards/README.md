# PlayingCards

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Début-Angular

Mon Parcours d'Apprentissage d'Angular. Ce dépôt contient des exercices, des exemples et des projets personnels pour améliorer ma compréhension des concepts et des bonnes pratiques d'Angular.

## Prérequis

### 1. Node.js
Environnement d'exécution JavaScript pour exécuter des scripts en dehors du navigateur. Il est nécessaire pour exécuter des applications Angular.

### 2. NPM (Node Package Manager)
Gestionnaire de paquets permettant d'installer et de gérer les bibliothèques JavaScript, dont Angular et ses dépendances.

### 3. Angular CLI
Outil en ligne de commande pour créer et gérer facilement des applications Angular.

## Installation

1. Installer Node.js depuis [nodejs.org](https://nodejs.org/)
2. Installer Angular CLI globalement :
   ```bash
   npm install -g @angular/cli
3. Vérifier la version
    ng version

# Créer un nouveau projet Angular
    ng new <nom-du-projet>
## Démarrer le projet
    npm start

## Explication des fichiers et dossiers générés
### Dossiers
1. node_modules/
    Ce dossier contient toutes les dépendances et bibliothèques installées via NPM pour le projet, y compris Angular, TypeScript, et d'autres packages essentiels.
2. src/
    C'est le dossier principal qui contient le code source de votre application Angular.
    1. app/
        Contient les composants, services, modules et autres fichiers Angular qui composent l'application.
3. .vscode/
    Ce dossier contient des configurations spécifiques à Visual Studio Code, comme les paramètres pour l'intégration avec ESLint ou le débogage. Il est généré si vous travaillez avec VSCode et que des configurations spécifiques y sont enregistrées.
4. .angular/
    Ce dossier est généré automatiquement par Angular CLI et contient des fichiers temporaires utilisés lors des étapes de compilation et de construction du projet. Ce dossier ne doit pas être modifié manuellement.
5. public/
    Ce dossier remplace le dossier assets dans les versions précédentes d'Angular. Il contient des fichiers statiques tels que des images, des polices ou d'autres ressources. Contrairement à src, les fichiers dans public ne sont pas transformés lors du build.

### Fihiers
1. .editorconfig
    Ce fichier permet de définir les règles de formatage du code (indentation, utilisation des espaces ou tabulations, etc.) afin d'assurer une cohérence entre les développeurs utilisant différents éditeurs.
2. .gitignore
    Ce fichier contient la liste des fichiers et dossiers que Git doit ignorer lors des commits. Par exemple, les dossiers node_modules/ et .angular/ ne sont pas versionnés dans Git.
3. angular.json
    Il s'agit du fichier de configuration principal pour Angular CLI. Il définit la structure du projet, les configurations pour le build, le serveur de développement, les tests, etc.
4. package.json
    Ce fichier contient des informations sur le projet, les scripts NPM disponibles (tels que start, build, etc.), ainsi que la liste des dépendances et des versions nécessaires pour le projet.
5. package-lock.json
    Ce fichier verrouille les versions exactes des dépendances installées pour garantir la cohérence entre les environnements de développement. Il est généré automatiquement et ne doit pas être modifié manuellement.
6. README.md
    Ce fichier contient des informations sur le projet, notamment une présentation générale, les étapes d'installation et d'utilisation. Il est destiné aux développeurs et aux utilisateurs du projet.
7. tsconfig.json
    Fichier de configuration TypeScript global pour le projet. Il spécifie la façon dont TypeScript doit être compilé (ex. cible ECMAScript, module, etc.).
8. tsconfig.app.json
    Fichier de configuration TypeScript spécifique à l'application Angular. Il exclut les fichiers de test et est utilisé pour la compilation de l'application.
9. tsconfig.spec.json
    Fichier de configuration TypeScript spécifique pour les tests. Il inclut les fichiers de test et est utilisé lors de l'exécution des tests unitaires.

# Extensions recommandées pour VSCode
1. Angular Language Service : 
    Aide à la complétion et à la détection d'erreurs dans les templates Angular.
2. Angular Snippets (Version 18) : 
    Fournit des raccourcis de code pour Angular.
3. ESLint : 
    Analyse statique pour vérifier la qualité du code.
4. Auto Import : 
    Facilite l'importation automatique des modules manquants.

# Composant Angular
    Un composant angular est simplement une classe typescript à la quelle on ajoute la notation @component qui prend différent paramètre en entrée.
    Ex : 
    @Component({
        selector: 'app-root',
        standalone: true,
        template: ''
    })

## Générer un composant
    ng g c <nom_Component>
    ng g c <nom_Component> --skip-tests pour ne veut pas générer de fichier test
