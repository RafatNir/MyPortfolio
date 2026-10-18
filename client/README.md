# Rafat Islam | React Portfolio

Personal portfolio website built with React for COMP229 - Web Application Development, Assignment 1.

- **Live site:** https://marvelous-gaufre-d00b69.netlify.app
- **GitHub:** https://github.com/RafatNir/portfolio

## Pages

- **Home** - welcome message, mission statement, and links to other pages
- **About** - portrait, short biography, and a link to the PDF resume
- **Projects** - three highlighted projects with an image, my role, and the outcome
- **Education** - qualifications with institutions and years
- **Services** - the services I offer
- **Contact** - contact details and a form that captures the visitor's information and redirects to Home

## Features

- Client-side routing with React Router, plus a navigation bar on every page
- Custom "RI" logo and favicon
- Responsive layout for phones, tablets, and desktops
- Contact form that stores field values in React state and redirects to the Home page on submit

## Built with

- React (Create React App)
- React Router DOM 6
- CSS
- Netlify (hosting)

## Run locally

```
npm install
npm start
```

The site opens at http://localhost:3000 (or the next free port).

Other scripts:

- `npm test` - run the tests once
- `npm run build` - create a production build in the `build` folder

## Project structure

```
public/            static files: index.html, favicon, resume PDF, images (assets/)
src/components/    Navbar
src/pages/         Home, About, Projects, Education, Services, Contact
src/App.js         routes and page layout
src/App.css        site-wide styles
```

## Deployment

The site is deployed on Netlify from this GitHub repository.

- Build command: `npm run build`
- Publish directory: `build`
- `public/_redirects` sends every route to `index.html`, so refreshing a page such as `/about` works

## Author

Rafat Islam - Software Engineering Technology student, Centennial College