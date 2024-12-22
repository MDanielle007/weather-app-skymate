# Vite Vue.js Boilerplate

This repository serves as a boilerplate for setting up a Vite-based Vue.js project with modern tooling and best practices. It comes preconfigured with the following features:

- **Vue Router** for client-side routing
- **Pinia** for state management
- **PrimeVue V4** with TailwindCSS integration for UI components
- **ESLint** and **Prettier** for code linting and formatting
- **Vitest** for unit testing
- **Cypress** for end-to-end testing

## Project Structure

```plaintext
├── cypress/               # Cypress E2E test configuration and tests
├── public/                # Static assets
├── src/                   # Source files
│   ├── assets/            # Static assets for the app
│   ├── components/        # Reusable Vue components
│   ├── plugins/           # Vue plugins (e.g., PrimeVue setup)
│   ├── router/            # Vue Router configuration
│   ├── stores/            # Pinia stores for state management
│   ├── views/             # Vue views or pages
│   ├── App.vue            # Root Vue component
│   ├── main.js            # Application entry point
├── .editorconfig          # Editor configuration for consistent coding styles
├── .gitignore             # Git ignore rules
├── .prettierrc.json       # Prettier configuration
├── components.d.ts        # TypeScript declarations for auto-imported components
├── cypress.config.js      # Cypress configuration file
├── eslint.config.js       # ESLint configuration file
├── index.html             # HTML template for the app
├── jsconfig.json          # JS config for IDE support
├── package-lock.json      # NPM dependency lock file
├── package.json           # NPM package configuration
├── postcss.config.js      # PostCSS configuration for TailwindCSS
├── README.md              # Project documentation
├── tailwind.config.js     # TailwindCSS configuration
├── vite.config.js         # Vite configuration
├── vitest.config.js       # Vitest configuration file
```

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/MDanielle007/Vite-VueJS-PrimeVue-V4-Boilterplate.git
   cd my-vite-vuejs-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173/`.

## Available Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run preview`**: Previews the production build.
- **`npm run lint`**: Lints the codebase using ESLint.
- **`npm run test:unit`**: Runs unit tests with Vitest.
- **`npm run test:e2e`**: Runs end-to-end tests with Cypress.

## Configuration

### ESLint and Prettier

- ESLint is configured to enforce consistent code quality.
- Prettier is used for automatic code formatting. Configuration is located in `.prettierrc.json`.

### TailwindCSS

TailwindCSS is configured via `tailwind.config.js` and integrated with PrimeVue for utility-first styling.

### PrimeVue Setup

PrimeVue components are pre-configured with Tailwind integration. Add additional components as needed in the `src/plugins/primevue.js`.

### Testing

#### Unit Tests
Vitest is used for unit testing. Test files are placed alongside the source files or in a `__tests__` folder.

#### End-to-End Tests
Cypress is configured for E2E testing. Add test specs in the `cypress/e2e` folder.

## License

This project is licensed under the [MIT License](./LICENSE).

---

Feel free to customize this boilerplate as needed for your projects!
