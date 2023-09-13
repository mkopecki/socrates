# Socrates: AI Assistant Server & Client

Socrates is a go-to self-hostable AI assistant platform. Designed with extensibility, modularity, and a focus on performance and user experience.

## Features and Roadmap

**Implemented:**
- Demo AI Assistant client and server

**In Progress:**
- Environemnts for AI assistants
- Migration to LangChain
- Support for LLAMA2
- Support for long-term memory
- Support for agents

## Getting Started

### Dev Mode

To get the development server running:

```bash
yarn dev
```

### Using Docker

Socrates comes Docker-ready right out of the box. Build and start the application using Docker Compose.

#### Build & Run

```bash
# Create a dedicated network
docker network create app_network

# Build with BuildKit
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose.yml build --parallel

# Start in detached mode
docker-compose -f docker-compose.yml up -d
```

Navigate to [http://localhost:3000](http://localhost:3000) to access the Socrates client.

#### Shutdown

To halt all containers, run:

```bash
docker kill $(docker ps -q) && docker rm $(docker ps -a -q)
```
