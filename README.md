# Boss Fit

Boss Fit currently runs a single MVP test: `상사핏 테스트`.

## What It Does

- `/`: test start screen
- `/test`: one-question-at-a-time test flow
- `/result/[sessionKey]`: score and result screen

Input scope for the MVP:

- boss MBTI: required
- user gender: male / female / unspecified
- no blood type input
- no age group input

The home screen is not a separate landing page. It is the test start screen and includes a Bamti-style office worker mascot.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Environment Variables

Create or update `.env.local` in the project root:

```bash
DATABASE_URL=postgresql://USER:PASSWORD@HOST/neondb?sslmode=require&channel_binding=require
```

`DATABASE_URL` is required for the Neon database connection and APIs.

## Database Setup

Apply schema:

```bash
psql "$DATABASE_URL" -f sql/schema.sql
```

Apply seed data:

```bash
psql "$DATABASE_URL" -f sql/seed.sql
```

## API

- `GET /api/questions`
- `POST /api/sessions`
- `GET /api/results/:sessionKey`

## Database Health Check

Check the DB connection at:

`http://localhost:3000/api/health`

## Vercel Deployment

When deploying to Vercel, add `DATABASE_URL` in the project's Environment Variables settings before building or running the app.
