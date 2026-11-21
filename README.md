# Mon Dex — dépôt de départ

Sprint 2 — Brief 1. Une page Tailwind **statique** à rendre interactive avec JavaScript, pour l'univers de votre choix : Pokémon, Digimon ou Yu-Gi-Oh!.

Lisez le brief complet avant de commencer.

## Installation

Prérequis : [Node.js](https://nodejs.org) (version 18 ou plus).

```bash
npm install
npm run dev
```

`npm run dev` surveille vos fichiers et régénère `dist/output.css` à chaque modification. Ouvrez ensuite `index.html` dans votre navigateur (ou avec l'extension Live Server).

Avant de mettre en ligne sur GitHub Pages :

```bash
npm run build
```

Puis committez `dist/output.css` : GitHub Pages ne lance pas Tailwind pour vous.



- **Univers choisi :** [ Yu-Gi-Oh!]
- **Lien GitHub Pages :** [[lien](https://ismailmrakna-dev.github.io/cards-Yo-Gi/)]
- **Sources des images :** [https://yugioh.fandom.com/wiki/Exodia_the_Forbidden_One]
- **Tests des expressions régulières :** [collez ici vos tests console : 2 valeurs valides et 2 invalides par expression]


# Yu-Gi-Oh! DEX — API Connect

A responsive Yu-Gi-Oh! encyclopedia connected to a REST API
using JSON Server.

## Features

### Dex
- Display Yu-Gi-Oh! creatures from the API.
- Search creatures by name or other fields.
- Filter creatures by attribute.
- Sort by name or ID.
- View detailed creature information.
- Add new creatures.
- Modify existing creatures.
- Delete creatures.

### Data management
- JSON Server REST API.
- GET, POST, PUT and DELETE.
- LocalStorage for the last selected filter.
- SessionStorage for form drafts.
- Form validation.
- Error and loading messages.

## Technologies

- HTML5
- Tailwind CSS
- JavaScript ES Modules
- Fetch API
- JSON Server 0.17.4
- JSON

## Project structure

```text
Yo-Gi-Api-Connect/
├── css/
├── images/
├── src/
│   ├── main.js
│   ├── ui.js
│   ├── rules.js
│   ├── storage.js
│   └── services/
│       └── api.js
├── db.json
├── index.html
├── package.json
└── README.md
```

## Installation

Requirements:
- Node.js
- npm

Install dependencies:

```bash
npm install
```

Start JSON Server:

```bash
npm run api
```

The API is available at:

http://localhost:3000

Start the frontend with VS Code Live Server.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /creatures | Get all creatures |
| GET | /creatures/1 | Get one creature |
| POST | /creatures | Create a creature |
| PUT | /creatures/1 | Update a creature |
| DELETE | /creatures/1 | Delete a creature |

### Search and filtering

```text
/creatures?type=DARK
/creatures?q=mag
/creatures?_sort=name&_order=asc
/creatures?type=DARK&q=mag&_sort=name&_order=asc
```

## Architecture

- api.js: API communication.
- rules.js: Business rules and validation.
- storage.js: Browser storage.
- ui.js: DOM rendering.
- main.js: Application controller.

All HTTP requests are centralized in api.js.

## Author

Ismail Mrakna

Educational project — Frontend Development.

Fan-made project, not affiliated with Konami.



### Fonctionnalités

- Parcourir une collection de cartes Yu-Gi-Oh!
- Rechercher des cartes par nom
- Filtrer les cartes par Attribut (DARK, LIGHT, FIRE, WATER, etc.)
- Trier les cartes par puissance totale (ATK + DEF)
- Voir les détails complets d’une carte
- Créer de nouveaux monstres personnalisés avec un formulaire + validation
- Constituer une équipe (maximum 6 monstres, sans doublon)
- Comparer les statistiques de deux cartes
- Design responsive (Desktop + Mobile)
- Sauvegarde avec LocalStorage (équipe + cartes créées)
- Bonus : prêt pour l’API Fetch

### Technologies utilisées

- HTML5
- CSS3 + Tailwind CSS
- JavaScript Vanilla
- LocalStorage
- Fetch API 

### Comment lancer le projet

1. Télécharge ou clone le projet
2. Ouvre le fichier `index.html` avec **Live Server** (recommandé avec VS Code)
3. Ou ouvre simplement le fichier dans ton navigateur

### Auteur

Projet réalisé dans le cadre d’une formation front-end.  
Fan project – non affilié à Konami.



**Merci d’avoir testé Yu-Gi-Oh! DEX !**  
Que le cœur du monstre soit avec toi.

---

Tu veux que je te génère aussi la version **Planification Jira en français** ?
