# Özkaya Shop Demo (AZ)

Local AZ mirror of the Vitrum shop with demo mode for customer preview.

## Local development

```bash
npm install
npm start
```

Open [http://localhost:8080](http://localhost:8080).

## Rebuild AZ pages

```bash
node build-local-pages.js
node apply-demo-mode.js
node verify-demo-mode.js
```

## Deploy on Vercel

1. Import this repo from GitHub.
2. Framework preset: **Other**
3. Root directory: leave empty (uses `vercel.json` → `shop.vitrumgroup.org`)
4. Deploy

Demo mode allows navigation only to translated collection/product pages; other links are blocked.
