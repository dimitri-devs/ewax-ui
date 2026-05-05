# EWAX UI

Professional backend/web-development agency website with visitor pages, admin dashboard, MongoDB, admin password login, Google login, services/projects/messages management, and login history.

## Setup
```bash
npm install
cp .env.example .env.local
npm run seed
npm run dev
```

Open `http://localhost:3000`.

## Security
Use real secrets only in `.env.local`. Never commit `.env.local`. Admin password is hashed during seeding.
