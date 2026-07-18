# Site BDE Baker

## Structure

```
bde-baker-site/
├── index.html          → Accueil
├── le-club.html         (à venir)
├── nos-moments/
│   ├── sante.html       (à venir)
│   └── weekend.html     (à venir)
├── erasmus/
│   ├── destinations.html (à venir)
│   └── voyages.html      (à venir)
├── ressources.html      (à venir)
├── css/style.css        → styles communs à toutes les pages
├── js/script.js         → interactions communes (menu burger, etc.)
└── images/
    ├── logo/
    ├── club/
    ├── sante/
    ├── weekend/
    ├── destinations/
    └── voyages/
```

## Comment ajouter tes images

1. Place ton fichier logo dans `images/logo/` et nomme-le `logo-bde-baker.png`
   (ou change le nom dans `index.html` pour qu'il corresponde à ton fichier).
2. Pour chaque page, place les photos dans le sous-dossier correspondant
   (ex : les photos des soirées santé vont dans `images/sante/`).
3. Dans le HTML, remplace les blocs de couleur (`<div class="collage-photo" style="background: ...">`)
   par une vraie balise image :
   ```html
   <img src="images/sante/stand-prevention.jpg" alt="Stand de prévention, soirée intég 2025" class="collage-photo">
   ```

## Publier sur GitHub Pages

1. Crée un dépôt GitHub et mets-y tout ce dossier (avec `images/` inclus).
2. Dans les paramètres du dépôt → Pages → active GitHub Pages sur la branche principale.
3. Le site sera accessible à `https://ton-nom.github.io/nom-du-depot/`.
