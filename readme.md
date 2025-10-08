# Laravel-Vue-React Monorepo

A modern monorepo setup combining Laravel backend with Vue.js and React frontend applications. This project demonstrates how to build a scalable full-stack application with multiple frontend frameworks working together.

## 🏗️ Project Structure

```
laravel-vue-react-monorepo/
├── packages/
│   ├── react-builder/          # React-based page builder (library)
│   └── vue-dashboard/          # Vue.js dashboard application
├── package.json               # Root package.json with workspaces
└── README.md
```

## 📦 Packages Overview

### React Builder (`packages/react-builder/`)
- **Purpose**: A React-based page builder component library
- **Build Output**: UMD library that can be consumed by other applications
- **Technology**: React 19, TypeScript, Vite
- **Output**: `page-builder.umd.js` and `react-builder.css`

### Vue Dashboard (`packages/vue-dashboard/`)
- **Purpose**: Main dashboard application built with Vue.js
- **Technology**: Vue 3, TypeScript, Vite
- **Integration**: Consumes the React Builder as a library

## 🚀 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v8.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git**

### Check your versions:
```bash
node --version
npm --version
git --version
```

## 📥 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd laravel-vue-react-monorepo
   ```

2. **Install dependencies**
   ```bash
   # Install all dependencies for all packages
   npm install
   ```

   This will install dependencies for:
   - Root workspace
   - React Builder package
   - Vue Dashboard package

## 🏃‍♂️ Running the Project

### Development Mode

#### Option 1: Run Individual Packages

**React Builder (Development)**
```bash
cd packages/react-builder
npm run dev
```
- Runs on: `http://localhost:5173`
- Hot reload enabled for development

**Vue Dashboard (Development)**
```bash
cd packages/vue-dashboard
npm run dev
```
- Runs on: `http://localhost:5173` (or next available port)
- Hot reload enabled for development

#### Option 2: Run from Root (Recommended)

```bash
# From the root directory
npm run dev --workspace=packages/react-builder
npm run dev --workspace=packages/vue-dashboard
```

### Production Build

#### Build React Builder Library
```bash
cd packages/react-builder
npm run build
```

This will:
- Compile TypeScript
- Build the UMD library
- Copy built files to Vue Dashboard's public folder
- Generate: `page-builder.umd.js` and `react-builder.css`

#### Build Vue Dashboard
```bash
cd packages/vue-dashboard
npm run build
```

#### Build All Packages
```bash
# From root directory
npm run build --workspace=packages/react-builder
npm run build --workspace=packages/vue-dashboard
```

### Preview Production Builds

```bash
# Preview React Builder
cd packages/react-builder
npm run preview

# Preview Vue Dashboard
cd packages/vue-dashboard
npm run preview
```

## 🔧 Development Workflow

### 1. React Builder Development
1. Navigate to `packages/react-builder`
2. Make changes to React components
3. Run `npm run dev` for hot reload
4. Run `npm run build` to create library build
5. Built files are automatically copied to Vue Dashboard

### 2. Vue Dashboard Development
1. Navigate to `packages/vue-dashboard`
2. Make changes to Vue components
3. Run `npm run dev` for hot reload
4. The dashboard can consume the React Builder library

### 3. Integration Testing
1. Build the React Builder: `npm run build` (in react-builder)
2. Start Vue Dashboard: `npm run dev` (in vue-dashboard)
3. Test the integration between Vue and React components

## 📁 Key Files

### React Builder
- `src/main.tsx` - Entry point for the React library
- `vite.config.ts` - Vite configuration for UMD library build
- `dist/` - Built library files

### Vue Dashboard
- `src/App.vue` - Main Vue application
- `public/react-builder/` - Contains the built React library files
- `vite.config.ts` - Vite configuration for Vue app

## 🛠️ Available Scripts

### Root Level
```bash
npm install          # Install all dependencies
npm run test         # Run tests (when implemented)
```

### React Builder
```bash
npm run dev          # Start development server
npm run build        # Build library + copy to Vue Dashboard
npm run build:only   # Build library only
npm run copy         # Copy built files to Vue Dashboard
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

### Vue Dashboard
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## 🔍 Troubleshooting

### Common Issues

1. **Port conflicts**: If ports 5173 are in use, Vite will automatically use the next available port
2. **Build errors**: Ensure all dependencies are installed with `npm install`
3. **TypeScript errors**: Run `npm run build` to check for compilation errors
4. **Missing React Builder files**: Run `npm run build` in the react-builder package first

### Reset Everything
```bash
# Clean install
rm -rf node_modules packages/*/node_modules
npm install
```

## 🏗️ Architecture Notes

- **Monorepo**: Uses npm workspaces for dependency management
- **Library Integration**: React Builder is built as a UMD library and consumed by Vue Dashboard
- **Build Pipeline**: React Builder files are automatically copied to Vue Dashboard during build
- **Development**: Each package can be developed independently
- **Production**: Both packages are built separately and can be deployed independently

## 📚 Technologies Used

- **React 19** - Frontend library for page builder
- **Vue 3** - Frontend framework for dashboard
- **TypeScript** - Type safety across all packages
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting
- **npm workspaces** - Monorepo management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test your changes: `npm run build` in both packages
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

---

For more detailed information about each package, check the individual README files in their respective directories.
