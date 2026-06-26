# guillaumeray.github.io

Site personnel basé sur Jekyll avec le thème Chirpy, hébergé sur GitHub Pages.

## Architecture du Site

### Type de Projet
- **Framework**: Jekyll (générateur de site statique)
- **Thème**: [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy/) v7.5+
- **Hébergement**: GitHub Pages
- **Déploiement**: GitHub Actions (automatique sur push vers master)
- **URL**: https://guillaumeray.github.io

### Structure des Répertoires

```
.
├── _config.yml          # Configuration principale du site
├── _data/               # Données structurées (contact, partage, etc.)
├── _plugins/            # Plugins Jekyll personnalisés
├── _posts/              # Articles de blog (format: YYYY-MM-DD-titre.md)
├── _tabs/               # Pages de navigation (About, Archives, Categories, Tags)
├── .github/workflows/   # GitHub Actions pour le déploiement
├── Gemfile              # Dépendances Ruby
├── index.html           # Page d'accueil
└── tools/               # Outils de développement
```

## Configuration du Site

### Fichier `_config.yml`

Configuration principale à personnaliser:

1. **Informations de base**:
   - `title`: Titre du site (actuellement "Chirpy")
   - `tagline`: Sous-titre du site
   - `description`: Description pour le SEO
   - `url`: URL complète du site (ex: `https://guillaumeray.github.io`)
   - `timezone`: Fuseau horaire (ex: `Europe/Paris`)

2. **Informations de l'auteur**:
   - `github.username`: Nom d'utilisateur GitHub
   - `twitter.username`: Nom d'utilisateur Twitter
   - `social.name`: Nom complet de l'auteur
   - `social.email`: Email de contact
   - `social.links`: Liens vers réseaux sociaux

3. **Avatar et images**:
   - `avatar`: Chemin vers l'image de profil
   - `social_preview_image`: Image de prévisualisation pour les réseaux sociaux

4. **Analytics** (optionnel):
   - Google Analytics, GoatCounter, Umami, Matomo, Cloudflare, Fathom

5. **Commentaires** (optionnel):
   - Disqus, Utterances, ou Giscus

## Comment Écrire un Article

### Créer un Nouveau Post

1. Créer un fichier dans `_posts/` avec le format: `YYYY-MM-DD-titre-du-post.md`
2. Ajouter le front matter obligatoire:

```markdown
---
title: "Titre de l'Article"
date: YYYY-MM-DD HH:MM:SS +/-TTTT
categories: [Catégorie Principale, Sous-Catégorie]
tags: [tag1, tag2, tag3]
author: <author_id>  # optionnel si un seul auteur
pin: true            # optionnel, épingle l'article en haut
toc: true            # optionnel, affiche la table des matières
comments: true       # optionnel, active les commentaires
---

Contenu de l'article en Markdown...
```

3. Utiliser les fonctionnalités Chirpy:

**Blocs d'information**:
```markdown
> Message d'information
{: .prompt-tip }

> Avertissement
{: .prompt-warning }

> Information générale
{: .prompt-info }

> Danger/Erreur
{: .prompt-danger }
```

**Chemins de fichiers**:
```markdown
`path/to/file`{: .filepath }
```

**Images**:
```markdown
![Description](/path/to/image.jpg)
_Légende de l'image_
```

### Catégories et Tags

- **Catégories**: Maximum 2 niveaux (Catégorie, Sous-catégorie)
- **Tags**: Illimités, utilisez des tags descriptifs et réutilisables
- Générés automatiquement dans les pages `/categories/` et `/tags/`

## Déploiement

### Déploiement Automatique

Le site se déploie automatiquement sur GitHub Pages via GitHub Actions:

1. **Déclenchement**: Push vers la branche `master` ou déclenchement manuel
2. **Build**: Jekyll construit le site avec Ruby 3.1
3. **Déploiement**: Artifact uploadé vers GitHub Pages
4. **URL**: Disponible sur `https://guillaumeray.github.io`

### Vérifier le Déploiement

- Aller sur: https://github.com/guillaumeray/guillaumeray.github.io/actions
- Vérifier le statut du workflow "Deploy Jekyll site to Pages"
- En cas d'échec, consulter les logs du workflow

## Développement Local

### Prérequis

- Ruby 3.1+
- Bundler

### Installation

```bash
# Installer les dépendances
bundle install

# Lancer le serveur de développement
bundle exec jekyll serve

# Avec rechargement automatique
bundle exec jekyll serve --livereload

# Serveur accessible sur http://localhost:4000
```

### Tester avant le Déploiement

```bash
# Build pour production
JEKYLL_ENV=production bundle exec jekyll build

# Vérifier les liens (HTML Proofer)
bundle exec htmlproofer ./_site \
  --disable-external \
  --ignore-urls "/^http:\/\/127.0.0.1/,/^http:\/\/0.0.0.0/,/^http:\/\/localhost/"
```

## Personnalisation du Thème

### Modifier les Pages de Navigation

Les pages de navigation sont dans `_tabs/`:
- `about.md`: Page "À propos"
- `archives.md`: Page des archives
- `categories.md`: Page des catégories
- `tags.md`: Page des tags

Pour modifier l'ordre ou ajouter une page, ajuster le paramètre `order` dans le front matter.

### Ajouter des Données Structurées

- `_data/contact.yml`: Liens de contact dans la sidebar
- `_data/share.yml`: Options de partage sur les réseaux sociaux

### PWA (Progressive Web App)

Le thème supporte PWA par défaut:
- Installable comme application
- Cache offline activé
- Configurable dans `_config.yml` section `pwa`

## Commandes Utiles

```bash
# Créer un nouveau post rapidement
touch _posts/$(date +%Y-%m-%d)-titre-du-post.md

# Lister tous les posts
ls -la _posts/

# Vérifier la config Jekyll
bundle exec jekyll doctor

# Nettoyer les fichiers générés
bundle exec jekyll clean

# Mettre à jour le thème
bundle update jekyll-theme-chirpy
```

## Troubleshooting

### Le site ne se déploie pas

1. Vérifier que GitHub Pages est activé (Settings → Pages)
2. Vérifier le workflow GitHub Actions
3. S'assurer que `_config.yml` est valide (YAML syntax)
4. Vérifier les permissions du `GITHUB_TOKEN`

### Le style ne s'affiche pas correctement

1. Vérifier le `baseurl` dans `_config.yml`
2. Vider le cache du navigateur
3. Vérifier que les assets sont correctement référencés

### Erreurs de build local

1. Mettre à jour Bundler: `bundle update --bundler`
2. Réinstaller les gems: `rm Gemfile.lock && bundle install`
3. Vérifier la version de Ruby: `ruby --version`

## Mise à Jour du Thème

Pour mettre à jour vers la dernière version de Chirpy:

```bash
# Mettre à jour le thème
bundle update jekyll-theme-chirpy

# Vérifier la nouvelle version
bundle info jekyll-theme-chirpy

# Commit et push
git add Gemfile.lock
git commit -m "Update Chirpy theme to vX.Y.Z"
git push
```

**Important**: Consulter le [CHANGELOG du thème](https://github.com/cotes2020/jekyll-theme-chirpy/releases) pour les breaking changes.

## Ressources

- [Documentation Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy/wiki)
- [Documentation Jekyll](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)

## État Actuel

- **Branche principale**: master
- **Dernier commit**: Revert "add site"
- **Status**: Repository propre (pas de changements non commités)
- **Posts**: Aucun post publié pour le moment (répertoire `_posts` vide)
- **Configuration**: Configuration par défaut du thème (à personnaliser)

## Actions Prioritaires

1. Personnaliser `_config.yml` avec vos informations
2. Mettre à jour `_tabs/about.md` avec votre présentation
3. Créer votre premier article dans `_posts/`
4. Vérifier le déploiement sur GitHub Pages
