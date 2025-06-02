# Netflix Clone

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app), aimed at replicating some of the core functionalities of Netflix.

## Description

This project is a clone of the popular streaming service Netflix. It allows users to browse a collection of movies, view details, manage a list of favorite movies, and watch them. The application features user authentication and a responsive user interface.

## Features

* **User Authentication**:
    * Sign up, login, and sign out functionality.
    * OAuth integration with Google and GitHub
* **Movie Browse**:
    * Display a billboard/hero section with a featured movie.
    * List movies in categories like "Trending Now" and "My List".
    * Movie cards with thumbnails and basic information.
* **Movie Details**:
    * Modal view for more detailed information about a movie (description, genre, duration).
* **Favorites List**:
    * Ability to add or remove movies from a personal "My List".
* **Movie Playback**:
    * Dedicated page for watching movies..tsx]
* **User Profiles**:
    * Basic profile page to select the current user.
* **Responsive Design**:
    * Mobile menu for navigation on smaller screens.
    * Navbar with dynamic background on scroll.

## Tech Stack

* **Frontend**:
    * [Next.js](https://nextjs.org/) (React Framework)
    * [React](https://reactjs.org/)
    * [TypeScript](https://www.typescriptlang.org/)
    * [Tailwind CSS](https://tailwindcss.com/)
    * [Axios](https://axios-http.com/) for HTTP requests.
    * [SWR](https://swr.vercel.app/) for data fetching.
    * [Zustand](https://zustand-demo.pmnd.rs/) for state management.
    * [React Icons](https://react-icons.github.io/react-icons/) for icons.
* **Backend/API**:
    * Next.js API Routes
    * [NextAuth.js](https://next-auth.js.org/) for authentication.
* **Database**:
    * [Prisma](https://www.prisma.io/) (ORM)
* **Styling**:
    * [Tailwind CSS](https://tailwindcss.com/)
    * [PostCSS](https://postcss.org/)
    * [Autoprefixer](https://github.com/postcss/autoprefixer)
* **Linting/Formatting**:
    * [ESLint](https://eslint.org/)

## Getting Started

First, set up your environment variables. You'll likely need:
* `DATABASE_URL`
* `GITHUB_ID`
* `GITHUB_SECRET`
* `GOOGLE_CLIENT_ID`
* `GOOGLE_CLIENT_SECRET`
* `NEXTAUTH_JWT_SECRET`
* `NEXTAUTH_SECRET`

Create a `.env.local` file in the root of the project and add your credentials.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

## Author
```
## Author

Rohan Mankame
