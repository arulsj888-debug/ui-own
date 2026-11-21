# UI Design Collection

This repository contains modern, high-performance UI designs and creative frontend prototypes built with React, Vite, and Tailwind CSS.

> 📄 **Complete PDF Guide:** See [UI_Design_Master_Guide_and_Resources.pdf](UI_Design_Master_Guide_and_Resources.pdf) for complete run instructions, creative component libraries (Aceternity UI, Magic UI, Codrops), AI prompt-to-code tools (v0, Bolt, Lovable), and ready-to-copy prompts.

---

## Included Projects

| Directory | Project Name | Tech Stack | Default Port & URL |
| :--- | :--- | :--- | :--- |
| **`galaxy/`** | **Lunar UI** | React 19, TypeScript, Vite, Tailwind CSS 4, Lenis | [http://localhost:3006](http://localhost:3006) |
| **`jewelery/`** | **Naiade UI** | React 19, TypeScript, Vite, Tailwind CSS 4, Lenis | [http://localhost:5173](http://localhost:5173) |
| **`fluxora/`** | **Ember UI** | React 19, Vite, Oxlint | [http://localhost:5173](http://localhost:5173) |
| **`custom/`** | **Aceternity 3D Cubes & Relay** | React 19, Three.js, Motion, Tailwind CSS 4 | [http://localhost:5174](http://localhost:5174) |
| **`google-flow/`** | **Google Labs Flow** | Standalone HTML5, CSS3, Google Sans, SVG Animations | Open `index.html` directly or serve |

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

### 📦 4. Custom (Aceternity 3D Cubes & Relay Alerting)

```bash
# Navigate to the custom folder
cd custom

# Install dependencies
npm install

# Start development server (runs on port 5174)
npm run dev
```

Open [http://localhost:5174](http://localhost:5174) in your browser to experience the real Three.js interactive 3D ripple cubes!

---

### 🌐 5. Google Flow (Google Labs UI)

```bash
# Option 1: Open directly in your browser
start google-flow/index.html

# Option 2: Serve via local server
npx serve google-flow
```

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

