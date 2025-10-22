# Node.js Express Server

A Node.js server built with Express.js framework hosting multiple API endpoints.

## Features

- **Express.js Framework**: Fast, unopinionated web framework for Node.js
- **GET /** - Returns "Hello world" greeting
- **GET /evening** - Returns "Good evening" greeting
- **Environment Configuration**: Configurable port via environment variables
- **Development Mode**: Auto-reload with nodemon for efficient development

## Prerequisites

- **Node.js** 20.x or higher
- **npm** 10.x or higher (bundled with Node.js)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd blitzy-20250604155133644
```

2. Install dependencies:
```bash
npm install
```

This will install:
- **express** ^4.19.2 - Web framework for routing and middleware
- **nodemon** ^3.1.0 - Development utility for auto-reload (dev dependency)

## Running the Server

### Production Mode

Run the server with Node.js directly:
```bash
npm start
```

Expected output:
```
Server running on port 3000
```

### Development Mode

Run the server with nodemon for automatic restart on file changes:
```bash
npm run dev
```

Expected output:
```
[nodemon] starting `node server.js`
Server running on port 3000
[nodemon] watching extensions: js,mjs,json
```

## API Endpoints

### GET /

Returns a simple "Hello world" greeting.

**Request:**
```bash
curl http://localhost:3000/
```

**Response:**
```
Hello world
```

### GET /evening

Returns an evening greeting.

**Request:**
```bash
curl http://localhost:3000/evening
```

**Response:**
```
Good evening
```

## Project Structure

```
.
├── server.js          # Main application entry point with Express.js server
├── package.json       # Node.js project manifest with dependencies
├── package-lock.json  # Dependency lock file for consistent installs
├── .env.example       # Environment variable template
├── .gitignore         # Git exclusion patterns
└── README.md          # Project documentation
```

### Key Files

- **server.js**: Express.js application with middleware configuration, route handlers for both endpoints, error handling, and server initialization
- **package.json**: Defines project metadata, dependencies (express, nodemon), and npm scripts (start, dev)
- **.env.example**: Template for environment variables like PORT and NODE_ENV
- **.gitignore**: Excludes node_modules, .env, and other generated files from version control

## Configuration

### Environment Variables

The server can be configured via environment variables. Copy `.env.example` to `.env` and customize:

```bash
cp .env.example .env
```

Available variables:

- **PORT**: HTTP server listening port (default: 3000)
- **NODE_ENV**: Environment mode - development, production, or test (default: development)

### Custom Port Example

To run the server on a different port:

```bash
PORT=8080 npm start
```

Or set it in your `.env` file:
```
PORT=8080
```

## Development Setup

1. **Create local environment file**:
```bash
cp .env.example .env
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server with auto-reload**:
```bash
npm run dev
```

4. **Test endpoints**:
```bash
# Test root endpoint
curl http://localhost:3000/

# Test evening endpoint
curl http://localhost:3000/evening
```

## Technical Details

- **Framework**: Express.js 4.x
- **Runtime**: Node.js 20.19.5 LTS
- **Package Manager**: npm 10.8.2
- **Middleware**: JSON body parsing, URL-encoded form parsing, request logging
- **Error Handling**: 404 handler for undefined routes, 500 handler for server errors

## Troubleshooting

### Port Already in Use

If you see an error like `EADDRINUSE`, the port is already in use. Either:
1. Stop the other process using that port
2. Use a different port: `PORT=3001 npm start`

### Module Not Found

If you see `Cannot find module 'express'`, run:
```bash
npm install
```

### Permission Denied on Linux/Mac

If you get permission errors, you may need to use a port above 1024 or run with appropriate permissions.
