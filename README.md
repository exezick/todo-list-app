# Todo List App - React + TypeScript + Vite

A simple and efficient Todo List application built using **React**, **TypeScript**, and **Vite**. This template provides a minimal setup to get you started with modern web development using fast tooling, type-safety, and real-time feedback with Hot Module Replacement (HMR).

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)

## 🚀 Getting Started

### Installation

Clone this repository and install the dependencies:

\`\`\`bash
git clone https://github.com/exezick/todo-list-app.git
cd todo-list-app
npm install
\`\`\`

### Development Server

Start the development server:

\`\`\`bash
npm run dev
\`\`\`

This will start a local development server at \`http://localhost:5173\` with Hot Module Replacement (HMR).

### Build for Production

To build the app for production:

\`\`\`bash
npm run build
\`\`\`

### Preview Production Build

Preview the production build locally:

\`\`\`bash
npm run preview
\`\`\`

## 🧩 Features

- **Add, Delete, and Mark Todos**: Basic CRUD functionality to manage your todos.
- **Unique Todo Items**: Todos are identified by unique IDs generated using \`uuid\` for precise tracking and deletion.
- **Favoriting Todos**: Ability to mark todos as favorites for easier tracking.
- **TypeScript Support**: Fully typed with TypeScript for better developer experience and code safety.
- **Responsive Design**: Optimized for both desktop and mobile viewing.

## 📏 ESLint Configuration

This project uses ESLint for code linting with the following configuration:

1. **Type-Aware Linting**: TypeScript-based linting to catch potential type errors.
2. **React-Specific Linting**: Ensures that your React code follows best practices.

### Recommended Type-Aware Config

For production applications, you can use **type-aware** linting by extending the ESLint configuration like this:

\`\`\`js
export default tseslint.config({
extends: [
...tseslint.configs.recommendedTypeChecked,
// Alternatively, use strict type-checked rules:
// ...tseslint.configs.strictTypeChecked,
// Optionally, for stylistic preferences:
// ...tseslint.configs.stylisticTypeChecked,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
},
});
\`\`\`

### React-Specific Linting (Optional)

To enforce React-specific linting rules, install additional ESLint plugins:

\`\`\`bash
npm install eslint-plugin-react-x eslint-plugin-react-dom --save-dev
\`\`\`

Then add them to your ESLint configuration:

\`\`\`js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
plugins: {
'react-x': reactX,
'react-dom': reactDom,
},
rules: {
...reactX.configs['recommended-typescript'].rules,
...reactDom.configs.recommended.rules,
},
});
\`\`\`

## 📂 Project Structure

\`\`\`bash
├── src/
│ ├── assets/ # Static assets (images, icons, etc.)
│ ├── components/ # Reusable components (TodoItem, TodoList, etc.)
│ ├── App.tsx # Root component
│ └── main.tsx # Entry point
├── index.html # HTML template
├── vite.config.ts # Vite configuration
├── tsconfig.json # TypeScript configuration
├── eslint.config.js # ESLint configuration
└── README.md # You're here!
\`\`\`

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

> Crafted with ❤️ using Vite
