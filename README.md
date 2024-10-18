# CSV Stock Manager

A full-stack inventory management app built with Node.js, Prisma, and Next.js for handling inventory data from CSV files. The app allows you to upload, validate, and manage stock data with ease, providing a responsive user interface and flexible cloud deployment options.

## Features

- Upload CSV files to import inventory data (SKU, quantity, store, description).
- Validate and edit inventory records with instant feedback.
- Perform CRUD operations on stock data.
- Responsive UI built with Tailwind CSS.
- Easily deployable to cloud environments.
- Pagination for navigating through large datasets.
- TypeScript for type safety and improved code maintainability.
- Dark Mode for a more accessible and visually comfortable interface.

## Tech Stack and Technologies

This project leverages a modern tech stack for both the frontend and backend, ensuring scalability, maintainability, and ease of development. The backend handles the business logic, data processing, and validation, while the frontend provides a seamless and responsive user interface for managing inventory data.

### Backend

- [Express](https://expressjs.com/): Minimal and flexible Node.js web application framework.
- [TypeScript](https://www.typescriptlang.org/): Strongly typed JavaScript for maintainable code.
- [Prisma](https://www.prisma.io/): Next-generation ORM for database interaction and migrations.
- [SQLite](https://www.sqlite.org/): Lightweight, serverless SQL database for local development.
- [Zod](https://zod.dev/): TypeScript-first schema validation library.
- [Vitest](https://vitest.dev/): Fast, lightweight unit testing framework.
- [Winston](https://github.com/winstonjs/winston): Logging library for consistent logging across the app.
- [Swagger](https://swagger.io/): API documentation and design tool.
- [ESLint](https://eslint.org/): Linting tool for identifying and fixing code issues.

### Frontend

- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [Next.js](https://nextjs.org/): React framework for server-side rendering and static site generation.
- [TypeScript](https://www.typescriptlang.org/): Type-safe JavaScript for a better development experience.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for building responsive designs.
- [ESLint](https://eslint.org/): Linting tool to ensure clean and consistent code.
- [Vitest](https://vitest.dev/): Fast, modern unit testing framework.
- [Storybook](https://storybook.js.org/): UI component development environment for building and testing React components.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JohnAdib/CSV-Stock-Manager.git
   ```

2. **Copy the necessary environment files:**

   - Make sure to copy the `.env.example` file in the `backend` directory and rename it to `.env`. Update the environment variables as needed.

   ```bash
   cp backend/.env.example backedn/.env
   ```

3. Install the dependencies for both the backend and frontend:

   ```bash
   cd backend
   npm install

   cd ../frontend
   npm install
   ```

4. Start the backend and frontend servers with turborepo:

   ```bash
    npm run dev
   ```

5. Access the app at `http://localhost:3000`.

## Deploy in Cloud

To deploy the app to a cloud, we need to add a Dockerfile for the backend and frontend, and a docker-compose file to run both services together. We can then build the Docker image and push it to a container registry like Docker Hub. Finally, we can deploy the image to a cloud platform.

## Screenshot

![3d-print-manager](doc/ui-homepage.png)
![3d-print-manager](doc/ui-about.png)
![3d-print-manager](doc/ui-list-empty.png)
![3d-print-manager](doc/ui-add.png)
![3d-print-manager](doc/ui-list.png)
![3d-print-manager](doc/ui-upload.png)
![3d-print-manager](doc/ui-delete.png)
![3d-print-manager](doc/ui-list-dark.png)
