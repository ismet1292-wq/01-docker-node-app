[![Node.js CI](https://github.com/ismet1292-wq/01-docker-node-app/actions/workflows/nodejs.yml/badge.svg)](https://github.com/ismet1292-wq/01-docker-node-app/actions/workflows/nodejs.yml)

# DevOps Node.js Application

A production-style DevOps portfolio project demonstrating containerization, orchestration, and continuous integration using Docker, Kubernetes, and GitHub Actions.

---

## Architecture

```text
                Developer
                    │
                    ▼
          GitHub Repository
                    │
                    ▼
        GitHub Actions (CI/CD)
                    │
                    ▼
          Docker Image Build
                    │
                    ▼
      Kubernetes Deployment
                    │
                    ▼
         Node.js Application
```

---

## Technologies

| Technology | Purpose |
|------------|---------|
| Node.js | Web application |
| Docker | Containerization |
| Kubernetes | Container orchestration |
| GitHub Actions | Continuous Integration |
| Git | Version Control |

---

## Skills Demonstrated

- Docker image creation
- Docker container management
- Kubernetes Deployments
- Kubernetes Services
- Kubernetes Scaling
- GitHub Actions CI/CD
- Git version control
- YAML configuration
- Node.js application deployment

---

## Project Structure

```text
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

Install dependencies

```bash
npm install
```

Start the application

```bash
npm start
```

Open

```
http://localhost:3000
```

---

## Docker

Build

```bash
docker build -t devops-node-app:v1 .
```

Run

```bash
docker run -p 3000:3000 devops-node-app:v1
```

---

## Kubernetes

Deploy

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

Verify

```bash
kubectl get deployments
kubectl get services
kubectl get pods
```

---

## CI/CD

GitHub Actions automatically:

- Checks out the repository
- Installs Node.js
- Installs project dependencies
- Builds the Docker image

---

## Future Improvements

- Automated testing
- Docker image publishing
- Terraform infrastructure
- AWS deployment
- Prometheus monitoring
- Grafana dashboards

---

## Author

**Ismet Xani**