# Testing in React with Vitest and React Testing Library

## Overview

Welcome to the **Testing in React with Vitest and React Testing Library** project! This repository accompanies a comprehensive tutorial that guides you through setting up and writing effective tests for your React applications using **Vitest** and **React Testing Library**. Whether you're a beginner or an experienced developer, this project will help you ensure your React components are robust, maintainable, and bug-free.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [Writing Tests](#writing-tests)
  - [Basic UI Testing](#basic-ui-testing)
  - [Testing User Events](#testing-user-events)
  - [Testing Data Fetching](#testing-data-fetching)
  - [Testing Custom Hooks](#testing-custom-hooks)
- [Best Practices](#best-practices)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Vitest Integration:** Fast and efficient test runner optimized for Vite projects.
- **React Testing Library:** Simplifies testing React components by focusing on user interactions.
- **Comprehensive Testing Examples:** Covers UI rendering, user events, data fetching, and custom hooks.
- **Organized Project Structure:** Keeps tests maintainable and easy to navigate.
- **Mocking with Vitest:** Efficiently mock API calls and external dependencies.
- **Custom Hooks Testing:** Ensure your custom React hooks work as intended.

## Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/react-vitest-testing-tutorial.git
   cd react-vitest-testing-tutorial
   ```

2. **Install Dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

## Project Structure

```
react-vitest-testing-tutorial/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Greeting.jsx
│   │   ├── Greeting.test.jsx
│   │   ├── Counter.jsx
│   │   ├── Counter.test.jsx
│   │   ├── UserProfile.jsx
│   │   └── UserProfile.test.jsx
│   ├── hooks/
│   │   ├── useCounter.js
│   │   └── useCounter.test.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vitest.config.js
├── vitest.setup.js
├── package.json
├── README.md
└── ...other config files
```

- **components/**: Contains React components and their corresponding test files.
- **hooks/**: Contains custom React hooks and their tests.
- **vitest.config.js**: Configuration file for Vitest.
- **vitest.setup.js**: Setup file to configure Vitest with Jest-DOM matchers.

## Running the Application

To start the development server:

Using npm:

```bash
npm run dev
```

Or using Yarn:

```bash
yarn dev
```

Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to see the running application.

## Running Tests

This project uses **Vitest** as the test runner. To execute the tests:

Using npm:

```bash
npm test
```

Or using Yarn:

```bash
yarn test
```

Vitest will run all test files matching the pattern `*.test.jsx` or `*.test.js` and display the results in the console.

### Viewing Test Coverage

To generate and view test coverage reports:

Using npm:

```bash
npm run test -- --coverage
```

Or using Yarn:

```bash
yarn test --coverage
```

The coverage report will be available in the `coverage/` directory.

