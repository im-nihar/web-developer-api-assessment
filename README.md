# Vite project Latest Movies Reviews

This project is about creating a web application that retrieves data from the Open Movie Database (OMDb) API and displays it on a listing page. The page includes cards for each movie, displaying information such as title, poster, release date, and rating. Additionally, the application allows users to filter the movies based on release date and rating, as well as sorting them in alphabetical and reverse alphabetical order.

## Table of Content:

- [Features](#Features)
- [Technologies](#Technologies)
- [Prerequisites](#Prerequisites)
- [Setup](#Setup)
- [Approach](#approach)
- [Contributing](#Contributing)
- [Credits](#credits)

## Features

1. Responsive Design
2. Two Filtering options
   - Release date
   - Rating
3. API integration
4. Open Movie Database (OMDb) API

## Technologies

- Vitejs (React.js)
- HTML
- CSS

## Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from [Node.js official website](https://nodejs.org/).

## Setup

1. Create a new React Project with Vite. (Install Vite with React and Javascript) 
   - Note: Vite requires Node.js version 18+. 20+.

```javascript
npm create vite@latest my-app

// Navigate to the directory
cd my-project

// install dependencies
npm install

// Start the server
npm run dev

// use the localhost link to view the project running
// For example: http://localhost:5173/
```
2. Create .env file into the root directory and add the key
```javascript
VITE_API_KEY = 'your_key'  
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Approach

There are a few naming conventions used in this project:

- The naming style for functions in the jsx components is camel case (eg. fitlerHander).
- The naming style for class names in CSS is hypen delimited string (eg. filter-container).

Apart from the naming convention, the folder structure is divided into different components for better re-usability.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.
