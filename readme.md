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
- **Build Output**: ES Module library that can be consumed by other applications
- **Technology**: React 19, TypeScript, Vite
- **Output**: `page-builder.es.js` and `react-builder.css`
- **Module Format**: ESM (ES Modules) for modern bundlers

### Vue Dashboard (`packages/vue-dashboard/`)
- **Purpose**: Main dashboard application built with Vue.js
- **Technology**: Vue 3, TypeScript, Vite
- **Integration**: Consumes the React Builder as a workspace dependency

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

## 🔗 How It Works

The React Builder is packaged as an ES Module and consumed by the Vue Dashboard through workspace dependencies:

```typescript
// In Vue Dashboard (App.vue)
import PageBuilder from 'react-builder';        // Import the library
import 'react-builder/style.css';               // Import the styles

// Use the builder
PageBuilder.render({
  containerId: "page-builder",
  onChange: (data) => {
    console.log("Data from React:", data);
  },
});
```

**Benefits of this approach:**
- ✅ Modern ES modules for better performance
- ✅ Tree-shaking support for smaller bundles
- ✅ TypeScript support out of the box
- ✅ No manual file copying needed
- ✅ Vite handles bundling automatically

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
- Build the ES Module library
- Generate: `page-builder.es.js` and `react-builder.css` in the `dist/` folder

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
3. Run `npm run dev` for hot reload development
4. Run `npm run build` to create ES module library build
5. The Vue Dashboard will automatically pick up changes via workspace linking

### 2. Vue Dashboard Development
1. Navigate to `packages/vue-dashboard`
2. Make changes to Vue components
3. Run `npm run dev` for hot reload
4. The dashboard imports React Builder as a workspace dependency
5. Use ES module imports: `import PageBuilder from 'react-builder'`

### 3. Integration Testing
1. Build the React Builder: `npm run build` (in react-builder)
2. Start Vue Dashboard: `npm run dev` (in vue-dashboard)
3. Test the integration between Vue and React components
4. Changes to React Builder require rebuild, then refresh Vue Dashboard

## 📁 Key Files

### React Builder
- `src/main.tsx` - Entry point that exports the library
- `vite.config.ts` - Vite configuration for ES module library build
- `package.json` - Package configuration with exports and module fields
- `dist/` - Built ES module library files

### Vue Dashboard
- `src/App.vue` - Main Vue application that imports React Builder
- `package.json` - Includes react-builder as workspace dependency
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
npm run build        # Build ES module library
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

1. **Port conflicts**: If port 5173 is in use, Vite will automatically use the next available port
2. **Build errors**: Ensure all dependencies are installed with `npm install` from the root
3. **TypeScript errors**: Run `npm run build` to check for compilation errors
4. **Workspace linking issues**: Run `npm install` from the root to ensure workspace dependencies are linked correctly
5. **React Builder not found**: Ensure you've run `npm run build` in the react-builder package first

### Reset Everything
```bash
# Clean install
rm -rf node_modules packages/*/node_modules
npm install
```

## 🏗️ Architecture Notes

- **Monorepo**: Uses npm workspaces for dependency management and package linking
- **Library Integration**: React Builder is built as an ES Module library and consumed by Vue Dashboard as a workspace dependency
- **Module Format**: Uses modern ES modules for better tree-shaking and bundler optimization
- **Workspace Dependencies**: React Builder is imported directly as `import PageBuilder from 'react-builder'`
- **Externalization**: React and React-DOM are externalized from the builder and included in the Vue Dashboard
- **Development**: Each package can be developed independently with hot reload
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
