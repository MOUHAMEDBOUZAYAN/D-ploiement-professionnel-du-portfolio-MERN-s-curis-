# Portfolio Professionnel Next.js

Un portfolio professionnel moderne construit avec Next.js, incluant un système de contact et une authentification sécurisée.

## Fonctionnalités

- 🎨 Design moderne et responsive avec Tailwind CSS
- 📝 Formulaire de contact avec envoi d'email automatique
- 🔒 Authentification sécurisée
- 📱 Interface adaptative
- 🚀 Performance optimisée
- 📧 Intégration Nodemailer pour les emails
- 🗄️ Base de données MongoDB

## Technologies Utilisées

- Next.js 14
- React
- Tailwind CSS
- MongoDB
- Nodemailer
- NextAuth.js
- Framer Motion

## Installation

1. Clonez le repository :
```bash
git clone [URL_DU_REPO]
cd portfolio-nextjs
```

2. Installez les dépendances :
```bash
npm install
```

3. Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :
```env
MONGODB_URI=votre_uri_mongodb
EMAIL_USER=votre_email@gmail.com
EMAIL_PASS=votre_mot_de_passe_application
ADMIN_EMAIL=votre_email_admin
NEXTAUTH_SECRET=votre_secret
NEXTAUTH_URL=http://localhost:3000
```

4. Lancez le serveur de développement :
```bash
npm run dev
```

## Structure du Projet

```
portfolio-nextjs/
├── app/
│   ├── api/          # Routes API
│   ├── components/   # Composants React
│   ├── lib/         # Utilitaires et configurations
│   ├── models/      # Modèles MongoDB
│   └── utils/       # Fonctions utilitaires
├── public/          # Fichiers statiques
└── ...
```

## Déploiement

Le projet est configuré pour être déployé sur Vercel. Pour déployer :

1. Créez un compte sur Vercel
2. Connectez votre repository GitHub
3. Configurez les variables d'environnement
4. Déployez !

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## Licence

MIT
