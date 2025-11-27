# Portfolio Bioinformatique & Data

Ce projet est un portfolio personnel moderne construit avec React, Tailwind CSS et Framer Motion, conçu pour les professionnels de la bioinformatique et de la data science.

## Prérequis

- **Node.js** (version 18 ou supérieure) doit être installé sur votre machine.
- **npm** (inclus avec Node.js).

## Installation

1. Ouvrez un terminal dans ce dossier.
2. Installez les dépendances :
   ```bash
   npm install
   ```

## Lancement

Pour lancer le serveur de développement :

```bash
npm run dev
```

Le site sera accessible à l'adresse `http://localhost:5173`.

## Personnalisation

- **Contenu** : Modifiez le fichier `src/data/profile.json` pour mettre à jour vos informations personnelles, compétences et projets.
- **Images** : Placez vos images dans le dossier `public/` et mettez à jour les références dans `profile.json`.
- **Couleurs** : Les couleurs principales sont définies dans `tailwind.config.js` (section `colors.bio` et `colors.data`).

## Structure du Projet

- `src/components/` : Composants React (Hero, Skills, Projects, Contact...).
- `src/data/` : Données du profil (JSON).
- `src/lib/` : Utilitaires.
- `src/App.jsx` : Point d'entrée de l'application.
