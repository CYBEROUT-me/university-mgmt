# 🎓 University Management System

[![CI/CD](https://github.com/your-username/university-mgmt/actions/workflows/ci.yml/badge.svg)](https://github.com/your-username/university-mgmt/actions)

Система управління університетом — програмний продукт для автоматизації навчального процесу: управління студентами, розкладом, оцінками та комунікацією.

## 🏗️ Архітектура

- **Frontend**: React 18 + TypeScript + Redux Toolkit + TailwindCSS
- **Backend**: Node.js + Express (мікросервіси)
- **Database**: PostgreSQL 15 + Redis
- **Infrastructure**: Docker + Kubernetes (AWS EKS)

## 📁 Структура проєкту

```
university-mgmt/
├── frontend/          # React SPA
├── backend/
│   ├── auth-service/      # JWT автентифікація
│   ├── academic-service/  # Оцінки, розклад, курси
│   ├── user-service/      # Профілі користувачів
│   └── notify-service/    # Email / Push сповіщення
├── infrastructure/
│   ├── terraform/         # IaC (AWS)
│   └── k8s/               # Kubernetes manifests
└── .github/workflows/     # CI/CD (GitHub Actions)
```

## 🚀 Швидкий старт

```bash
# Клонування
git clone https://github.com/your-username/university-mgmt.git
cd university-mgmt

# Запуск локально
docker-compose up --build

# Frontend (окремо)
cd frontend && npm install && npm run dev

# Backend (окремо)
cd backend/auth-service && npm install && npm run dev
```

## 🔐 Environment Variables

Скопіюй `.env.example` → `.env` та заповни значення:

```bash
cp .env.example .env
```

## 🌿 Git Flow

| Гілка | Призначення |
|-------|-------------|
| `main` | Production-ready код |
| `develop` | Інтеграційна гілка |
| `feature/*` | Нова функціональність |
| `bugfix/*` | Виправлення помилок |
| `release/*` | Підготовка релізу |

## 📋 Варіант

**Варіант 22** — Система управління університетом  
Дисципліна: Технологія створення програмних продуктів  
Студент: Юхно Олександр, гр. 301-ТН
