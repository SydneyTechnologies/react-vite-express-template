# React Vite Express Template

A full-stack application built with React, Vite, TypeScript, and Express.

## Features

- ⚡️ Vite for fast development and HMR (Hot Module Replacement)
- ⚛️ React 19 with TypeScript
- 🚀 Express server with TypeScript
- 🐳 Docker support with development and production configurations
- 🔄 Auto-reload for both client and server in development mode

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn
- Docker and Docker Compose (optional, for containerized deployment)

### Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development servers (both client and server with HMR):

```bash
npm run dev
```

This will start:

- Vite dev server on `http://localhost:5173` (with HMR)
- Express API server on `http://localhost:3001`

3. The Vite dev server will proxy API requests from `/api/*` to the Express server.

### Available Scripts

- `npm run dev` - Start both client and server in development mode with HMR
- `npm run dev:client` - Start only the Vite dev server
- `npm run dev:server` - Start only the Express server with auto-reload
- `npm run build` - Build the client for production
- `npm run build:server` - Build the server for production
- `npm run start` - Start the production server
- `npm run start:server` - Start the server in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build

### Docker Development

For development with Docker (includes HMR):

```bash
docker-compose --profile dev up app-dev
```

This will:

- Start the development container
- Enable volume mounting for live code changes
- Enable HMR for instant updates
- Expose ports 5173 (Vite) and 3001 (Express)

Access the app at `http://localhost:5173`

### Docker Production

Build and run the production container:

```bash
# Build the image
docker-compose build

# Start the container
docker-compose up app
```

The production server will be available at `http://localhost:3001`

Or use Docker directly:

```bash
# Build
docker build -t template-app .

# Run
docker run -p 3001:3001 template-app
```

### API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/hello` - Sample API endpoint

## Project Structure

```
pug-viewer/
├── src/                  # React frontend source
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── server/              # Express backend source
│   ├── index.ts
│   └── tsconfig.json
├── dist/                # Built frontend files
├── public/              # Static assets
├── Dockerfile           # Production Docker image
├── Dockerfile.dev       # Development Docker image
├── docker-compose.yml   # Docker Compose configuration
└── vite.config.ts       # Vite configuration with HMR
```

## Development Notes

- The Vite dev server includes HMR (Hot Module Replacement) for instant updates
- The Express server uses `nodemon` and `tsx` for auto-reload on file changes
- In development, API requests to `/api/*` are proxied from Vite to Express
- In production, Express serves the built React app as static files
- Docker development mode uses volume mounting to enable HMR inside containers

## Environment Variables

- `PORT` - Express server port (default: 3001)
- `NODE_ENV` - Environment (development/production)

## License

MIT
