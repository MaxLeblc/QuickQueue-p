# QuickQueue MVP

Une application de gestion de files d'attente moderne construite avec Next.js et Express.

## 🚀 Fonctionnalités

- Interface utilisateur moderne avec Next.js et Tailwind CSS
- API backend robuste avec Express et TypeScript
- Base de données avec Prisma ORM
- Authentification sécurisée
- Interface responsive et intuitive

## 🛠️ Technologies utilisées

### Frontend
- **Next.js 14** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Radix UI** - Composants UI accessibles
- **React Hook Form** - Gestion des formulaires
- **Zod** - Validation des schémas

### Backend
- **Express.js** - Framework web Node.js
- **TypeScript** - Typage statique
- **Prisma** - ORM moderne
- **JWT** - Authentification
- **bcrypt** - Hachage des mots de passe

## 📦 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn
- Base de données (PostgreSQL recommandé)

### Installation

1. Clonez le repository :
```bash
git clone <url-du-repo>
cd quickqueue
```

2. Installez les dépendances du backend :
```bash
cd backend
npm install
```

3. Installez les dépendances du frontend :
```bash
cd ../frontend
npm install
```

4. Configurez les variables d'environnement :
```bash
# Dans le dossier backend, créez un fichier .env
cp .env.example .env
# Editez .env avec vos configurations
```

5. Configurez la base de données :
```bash
cd backend
npx prisma migrate dev
```

## 🔧 Développement

### Démarrer le backend :
```bash
cd backend
npm run dev
```

### Démarrer le frontend :
```bash
cd frontend
npm run dev
```

L'application sera accessible à `http://localhost:3000`

## 📁 Structure du projet

```
quickqueue/
├── backend/          # API Express.js
│   ├── src/         # Code source
│   ├── prisma/      # Schémas et migrations Prisma
│   └── server.ts    # Point d'entrée du serveur
├── frontend/        # Application Next.js
│   ├── src/         # Code source React
│   ├── components/  # Composants réutilisables
│   └── app/         # Pages et routes
└── README.md
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Committer vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**Maxime Leblanc**

---

⭐ N'hésitez pas à donner une étoile si ce projet vous plaît !