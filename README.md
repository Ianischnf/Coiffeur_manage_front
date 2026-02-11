# 💇‍♂️ Salon Manager - Application de gestion de rendez-vous

Application fullstack permettant la gestion des rendez-vous d’un salon de coiffure.

---

## 📌 Description

Cette application permet :

- 📅 Planifier un rendez-vous
- ❌ Supprimer un rendez-vous
- 👨‍💼 Sélectionner un coiffeur
- 🔐 Authentification sécurisée via JWT
- 📝 Ajouter une note à un rendez-vous

Le projet est conçu avec une architecture Frontend / Backend séparée.

---

## 🛠️ Technologies utilisées

### 🎨 Frontend
- Angular
- Angular Material
- TypeScript
- RxJS

### ⚙️ Backend
- Java 17
- Spring Boot
- Spring Security
- JWT
- JPA / Hibernate

### 🗄️ Base de données
- PostgresSQL

---

## 🏗️ Architecture

Frontend (Angular)  
⬇  
API REST sécurisée (Spring Boot)  
⬇  
Base de données PostresSQL  

L’authentification est gérée via un token JWT stocké côté client.

---

## 🚀 Installation

### 1️⃣ Cloner le projet

### Backend

```bash
git clone https://github.com/Ianischnf/Coiffeur_Manage.git
```

### Frontend

```bash
git clone https://github.com/Ianischnf/Coiffeur_manage_front.git
```
---

### 2️⃣ Lancer le backend

```bash
mvn spring-boot:run
```

Le serveur démarre sur :
```
http://localhost:8083
```

---

### 3️⃣ Lancer le frontend

```bash
npm install
ng serve
```

Application accessible sur :
```
http://localhost:4200
```

---

## 🔐 Sécurité

L’application utilise :

- Authentification JWT
- Filtre personnalisé Spring Security
- Gestion des rôles utilisateurs

Les endpoints sensibles sont protégés par token.

---

## 📷 Aperçu

_Ajouter ici des captures d’écran de l’application_

---

## 🧠 Ce que j’ai appris

- Mise en place d’une authentification JWT complète
- Communication Frontend / Backend via API REST
- Gestion des états et événements Angular
- Sécurisation d’API avec Spring Security
- Gestion des erreurs HTTP et CORS

---

## 🔮 Améliorations futures

- Dashboard statistiques
- Notifications
- Déploiement Docker
- Tests unitaires et d’intégration

---

## 👤 Auteur

Développé par Ianis CHENNAF

