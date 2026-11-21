# UI Design Collection

This repository contains modern, high-performance UI designs and creative frontend prototypes built with React, Vite, and Tailwind CSS.

---

## Included Projects

| Directory | Project Name | Tech Stack | Default Port & URL |
| :--- | :--- | :--- | :--- |
| **`galaxy/`** | **Lunar UI** | React 19, TypeScript, Vite, Tailwind CSS 4, Lenis | [http://localhost:3006](http://localhost:3006) |
| **`jewelery/`** | **Naiade UI** | React 19, TypeScript, Vite, Tailwind CSS 4, Lenis | [http://localhost:5173](http://localhost:5173) |
| **`fluxora/`** | **Ember UI** | React 19, Vite, Oxlint | [http://localhost:5173](http://localhost:5173) |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### 1. Clone the Repository

```bash
git clone https://github.com/arulsj888-debug/ui-own.git
cd ui-own
```

---

## Installation & Running

Before running any project for the first time, install its dependencies.

### 🌌 1. Galaxy (Lunar UI)

```bash
# Navigate to the galaxy folder
cd galaxy

# Install dependencies
npm install

# Start development server (runs on port 3006)
npm run dev
```

Open [http://localhost:3006](http://localhost:3006) in your browser.

---

### 💎 2. Jewelery (Naiade UI)

```bash
# Navigate to the jewelery folder
cd jewelery

# Install dependencies
npm install

# Start development server (runs on port 5173)
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

### 🔥 3. Fluxora (Ember UI)

```bash
# Navigate to the fluxora folder
cd fluxora

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Running Projects Concurrently

You can run `galaxy` (port 3006) and `jewelery` (port 5173) at the same time in separate terminal windows without any port collision.

### On Windows PowerShell:
```powershell
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'galaxy'; npm.cmd run dev"; Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'jewelery'; npm.cmd run dev"
```

---

## Building for Production

To create production builds:

```bash
# In galaxy/
npm run build

# In jewelery/
npm run build

# In fluxora/
npm run build
```

The compiled output will be generated inside each project's `dist/` directory.
