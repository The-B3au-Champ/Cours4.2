# Exemple CI - Déploiement des tests unitaires avec GitHub Actions
 
![CI Tests](https://github.com/KhalilPoly/exemple-ci/actions/workflows/ci-tests.yml/badge.svg)
 
## Description
 
Ce projet montre comment configurer un pipeline **CI/CD** pour exécuter des tests unitaires avec **Jest** sur GitHub à l'aide de **GitHub Actions**.
 
## Fonctionnalités
 
- **Intégration continue (CI)** :  
  Les tests sont automatiquement exécutés :
  - Lors de chaque `push` sur la branche `master`.
  - Lors des `pull requests`.
 
- **Statut des tests** :  
  Le badge ci-dessus indique si les tests passent (**✅**) ou échouent (**❌**).
 
## Scripts
 
### Exécuter les tests en local
 
```bash
npm install
npm test