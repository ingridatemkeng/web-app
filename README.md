# Application Web de Calculatrice Simple
Ceci est une application web de calculatrice simple construite avec Node.js, Express et EJS. L'application permet aux utilisateurs d'effectuer des opérations arithmétiques de base comme l'addition, la soustraction, la multiplication et la division.

## Fonctionnalités
- Opérations arithmétiques de base
- Design réactif
- Dockerisé pour un déploiement facile

## Prise en Main
### Prérequis
- Node.js (v20)
- npm (v10.5.0)
- Docker
- Git

### Installation
1. **Cloner le dépôt**
    ```sh
    git clone https://github.com/ingridatemkeng/web-app.git
    cd web-app.git
    ```
2. **Installer les dépendances**
    ```sh
    npm install
    ```
    
### Lancer l'Application
1. **Démarrer l'application**
    ```sh
    npm start
    ```
2. **Ouvrir votre navigateur**
    Allez à `http://localhost:4000` pour voir l'application en action.

### Exécution des Tests
Nous utilisons Jest pour les tests en s'assurant que tous les tests passent avant de déployer.
1. **Lancer les tests**
    ```sh
    npm test
    ```
    
### Construire l'Image Docker
1. **Construire l'image Docker**
    ```sh
    docker build -t ingrid265/web-app:latest .
    ```
2. **Lancer le conteneur Docker**
    ```sh
    docker run -p 3001:4000 ingrid265/web-app:latest
    ```

### Déploiement
L'application peut être déployée en utilisant Docker. Le workflow GitHub Actions est configuré pour automatiser ce processus.

1. **Pousser dans le dépôt**
    Lorsque nous poussons des modifications dans la branche `master`, le pipeline GitHub Actions va :
    - Exécuter les tests
    - Construire l'image Docker
    - Pousser l'image Docker sur Docker Hub
    - Déployer l'image Docker sur le serveur

2. **Déploiement manuel**
    Nous pouvons également déployer l'application manuellement en suivant ces étapes :
    ```sh
    docker pull votre_utilisateur_dockerhub/votre_nom_app:latest
    docker stop web-app || true
    docker rm web-app || true
    docker run -d --name web-app -p 3001:4000 ingrid265/web-app:lates
    ```

### Pipeline CI/CD GitHub Actions
Le pipeline CI/CD est défini dans le fichier `.github/workflows/ci-cd.yml`. Le pipeline inclut les étapes suivantes :
- **Récupérer le code** : Récupérer le dernier code du dépôt.
- **Configurer Node.js** : Installer la version spécifiée de Node.js.
- **Installer les dépendances** : Installer les dépendances npm.
- **Exécuter les tests** : Exécuter la suite de tests.
- **Construire l'image Docker** : Construire l'image Docker si les tests passent.
- **Pousser l'image Docker** : Pousser l'image Docker sur Docker Hub.
- **Déployer** : Déployer l'image Docker sur le serveur spécifié.

### Configuration
Nous devons configurer les secrets suivants dans votre dépôt GitHub :
- `DOCKER_HUB_USERNAME` : nom d'utilisateur Docker Hub.
- `DOCKER_HUB_PASSWORD` : mot de passe Docker Hub.
- `SERVER_USER` : Le nom d'utilisateur pour du serveur.
- `SERVER_IP` : L'adresse IP du serveur.

### Contribuer
N'hésitez pas à ouvrir des issues ou à soumettre des pull requests pour toute amélioration ou correction de bug.

