# Malik Life Care Hospital – Web Application

Multispeciality Hospital in Krishnagiri, Tamil Nadu.

## Project Structure

```text
maalik_vaaris_Hosp/
├── frontend/               # Full React 19 + Vite 8 + Tailwind CSS application
│   ├── public/             # Static public assets, icons, images
│   ├── src/
│   │   ├── components/     # UI, layout, common & homepage section components
│   │   ├── data/           # Hospital constants, departments, doctors, data
│   │   ├── hooks/          # Custom utility hooks
│   │   ├── pages/          # All 11 pages (Home, About, Departments, etc.)
│   │   ├── App.jsx         # App router configuration
│   │   └── main.jsx        # App bootstrap
│   ├── package.json
│   └── vite.config.js
└── package.json            # Root workspace runner scripts
```

## Running the Application

### Option A: From root directory
```bash
npm run dev
```

### Option B: From `frontend/` directory
```bash
cd frontend
npm run dev
```

### Production Build
```bash
npm run build
```

## Cloudflare Pages Deployment

This project is pre-configured for seamless hosting on **Cloudflare Pages** with SPA client-side routing (`_redirects` pre-configured):

### Cloudflare Pages Build Settings:
- **Framework preset**: `Vite` (or `None`)
- **Build command**: `npm run build`
- **Build output directory**: `dist` (or `frontend/dist`)
- **Root directory** *(optional)*: `/` (or `frontend`)

*Note: SPA routing (`/* /index.html 200`) and cache headers are automatically bundled into the build output via `frontend/public/_redirects` and `_headers`.*

