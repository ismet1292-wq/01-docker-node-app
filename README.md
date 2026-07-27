[![Node.js CI](https://github.com/ismet1292-wq/01-docker-node-app/actions/workflows/nodejs.yml/badge.svg)](https://github.com/ismet1292-wq/01-docker-node-app/actions/workflows/nodejs.yml)

# DevOps Node.js Application

A simple Node.js application demonstrating modern DevOps practices using Docker, Kubernetes, and GitHub Actions.
# DevOps Node.js Application

A simple Node.js application demonstrating modern DevOps practices using Docker, Kubernetes, and GitHub Actions.

---

## Technologies

- Node.js
- Docker
- Kubernetes (Minikube)
- GitHub Actions
- Git

---

## Project Structure

```
01-docker-node-app
│
├── .github/
│   └── workflows/
│       └── nodejs.yml
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
├── app.js
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
```

---

## Run Locally

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

Open:

```
http://localhost:3000
```

---

## Build Docker Image

```bash
docker build -t devops-node-app:v1 .
```

Run:

```bash
docker run -p 3000:3000 devops-node-app:v1
```

---

## Deploy to Kubernetes

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

View resources:

```bash
kubectl get deployments
kubectl get services
kubectl get pods
```

---

## CI/CD

GitHub Actions automatically:

- Checks out the repository
- Installs dependencies
- Builds the Docker image

---

## Author

Ismet Xani