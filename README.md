# Project: TheMovie

# Features

TheMovie has the following features:

- Home page: Displays a list of movies with their titles, posters, and ratings.
- Details page: Displays detailed information about a specific movie, including its title, poster, overview, cast, and trailer.

# Project Description

TheMovie is a movie streaming app that allows users to browse and watch movies.

- The project is built using React, Typescript, and Vite.
- The app uses Tailwind CSS for styling. Make use of the Tailwind merge library to easy extend the styles.
- The app uses React Router for routing.
- The app uses React Query for data fetching.
- The app uses Axios for making API requests. The API is provided by themoviedb.org.
- The app configures ESLint and Prettier for code linting and formatting.


## Project Structure

The project is structured as follows:

```
src/
  components/
    card.tsx
    image.tsx
    layout/
      default-layout.tsx
      full-app-loading.tsx
    movie-slider.tsx
    section.tsx
  constants.ts
  pages/
    home/
      components/
        movie-slider.tsx
      hooks.ts
      index.tsx
    movie-details/
      components/
        trailer-modal.tsx
      hooks.ts
      index.tsx
  utils.ts
```
- This structure follow the feature-based approach, where each feature is a separate folder with its own components, hooks, and index files.
- The advantage of this structure:
  - It allows for easy navigation and organization of the codebase.
  - Clear separation of concerns
  - Scalable: new features can be added without affecting the existing code
- The disadvantage of this structure:
  - Code duplication: features often have similar code or logic. Careful planning and refactoring are required to avoid code duplication.
- The `components` folder contains the reusable components used throughout the app, such as `Card`, `Image`, `Section`, and `MovieSlider`.
- The `constants` file contains global constants used throughout the app, such as the API endpoints and the default layout.
- The `pages` folder contains the pages of the app, including the home page, movie details page, and movie slider page.
- The `utils` file contains utility functions used throughout the app.

## Project Dependencies

The project has the following dependencies:

- React
- Typescript
- Vite
- Tailwind CSS
- React Router
- React Query
- Axios
- ESLint
- Prettier

## Project Setup and Running
- run `npm install` to install the dependencies.
- run `npm run dev` to start the development server.
