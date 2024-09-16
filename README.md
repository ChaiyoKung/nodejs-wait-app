# Node.js Wait App

A simple Node.js application that waits for a specified duration

## Getting Started

```bash
cp .env.example .env
npm install
npm start
```

## Run with Docker

```bash
docker build -t nodejs-wait-app .
docker run nodejs-wait-app
docker run -e "WAIT_MS=5000" nodejs-wait-app
```
