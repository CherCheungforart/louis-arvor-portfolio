# Louis Arvor — Portfolio

Site statique de portfolio : https://louis-arvor-portfolio.vercel.app/

## Modifier avec un agent IA
Lire `AGENTS.md`, puis `README-先读我.md`. Le site déployable est dans `website/`, les sources de compilation dans `development/`. Les projets actuels sont des exemples à remplacer par les informations validées de Louis.

```sh
python3 -m http.server 5198 --directory website
# Reconstruction des bundles, si nécessaire :
cd development
npm ci
npm run build
```

## Tous les fichiers et modèles originaux
Le code, les images, les polices, les modèles web et les documents sont versionnés ici. Les trois fichiers Blender de plus de 100 Mio sont conservés dans le ZIP complet de la [release de livraison](https://github.com/CherCheungforart/louis-arvor-portfolio/releases/tag/handoff-2026-09-20).

Télécharger `louis-arvor-handoff-2026-09-18.zip` pour obtenir l’intégralité des 181 fichiers, y compris ces trois modèles. Le manifeste `SHA256SUMS.json` décrit ce paquet complet. Les fichiers correspondants de ce dépôt sont identiques à ceux du paquet.

SHA-256 du ZIP : `4a924b8b9520307b2a938be98fbe7a83dad3dc979bda6c9b831b3e0a67199aed`.

## Déploiement et droits
Déployer uniquement `website/`. Ce dépôt ne transfère pas automatiquement le projet Vercel existant ; voir `线上项目转交.md`. Aucun identifiant Vercel ni secret de compte n’est inclus. Conserver les licences des polices et des ressources tierces ; leur présence dans ce dépôt ne constitue pas une cession de droits exclusifs.

## 中文说明
网站源码、项目内容与素材均已整理。超大 Blender 原文件在上述 Release 的完整交付 ZIP 中；其余文件直接保存在仓库。现有线上 URL 的 Vercel 所有权需另行转交，上传 GitHub 不会自动改变线上网站。

## Reprise sur un autre ordinateur
Lire [docs/HANDOFF.md](docs/HANDOFF.md) pour l’état actuel, les décisions confirmées et les étapes de reprise.
