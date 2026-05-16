# Boss Fit

Boss Fit is a Next.js App Router starter for a Vercel-deployable workplace compatibility service.  
This stage only provides the application skeleton and a Neon PostgreSQL connection health check.

## Current Screens

- `/`: test start screen
- `/test`: temporary question entry screen

The home screen is not a separate landing page. It is the test start screen and includes a Bamti-style office worker mascot.

Current input scope:

- boss MBTI: required
- no blood type input
- no age group input
- no gender input

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Environment Variables

Create or update `.env.local` in the project root and set:

```bash
DATABASE_URL=postgresql://USER:PASSWORD@HOST/neondb?sslmode=require&channel_binding=require
```

`DATABASE_URL` is required for the Neon database connection check.

## Database Health Check

Check the DB connection at:

`http://localhost:3000/api/health`

## Vercel Deployment

When deploying to Vercel, add `DATABASE_URL` in the project's Environment Variables settings before building or running the app.
