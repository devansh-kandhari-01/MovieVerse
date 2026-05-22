# MovieVerse

MovieVerse is a responsive movie discovery web application built with React and the TMDB API. The app allows users to explore popular movies, search for titles in real time, and maintain a personal favourites list that stays saved even after refreshing the browser.

The project was built to practice modern React concepts such as component-based architecture, Context API, React Router, state management, asynchronous API handling, and persistent storage using localStorage.

---

## Features

- Browse popular movies from TMDB
- Search movies dynamically
- Add and remove favourite movies
- Persistent favourites using localStorage
- Responsive grid layout
- Loading and error handling states
- Client-side routing with React Router
- Clean UI built with Tailwind CSS

---

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router DOM
- TMDB API
- Context API
- localStorage

---

## Project Structure

```bash
movie-list-frontend/
│
├── node_modules/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   └── NavBar.jsx
│   │
│   ├── context/
│   │   └── FavouriteProvider.jsx
│   │
│   ├── pages/
│   │   ├── Favourite.jsx
│   │   └── Home.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/devansh-kandhari-01/MovieVerse.git
```

Move into the project directory:

```bash
cd movie-list-fronted
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## TMDB API Setup

Create an account on TMDB and generate an API key.

Replace the API key inside:

```bash
src/services/api.js
```

with your own key:

```js
const API_KEY = "YOUR_API_KEY";
```

---

## Learning Highlights

This project helped in understanding:

- React hooks
- Context API
- Global state management
- Conditional rendering
- Functional state updates
- API integration using fetch
- Local storage persistence
- Component reusability
- React Router navigation

---

## Acknowledgements

Movie data provided by TMDB API.

---

## License

This project is open source and available under the MIT License.
