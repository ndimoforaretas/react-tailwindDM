# React Browser Router Project

This project demonstrates how to set up a React project with the `react-router-dom` package to enable routing in a single page application with Browser Router.

## Packages

- React Router Dom - `npm install react-router-dom`
- Tailwind CSS - `npm install tailwindcss`
- Nano ID - `npm install nanoid`
- React Icons - `npm install react-icons`

## Steps

### Tailwind CSS Installation & Configuration

- [ ] start your react-vite project with `npm create vite@latest <name of project>` and change directory to the project folder with `cd <name of project>`.
- [ ] Install the packages with `npm install`.
- [ ] Install Tailwind CSS for vite according to [this documentation guide](https://tailwindcss.com/docs/guides/vite):
  - `npm install -D tailwindcss postcss autoprefixer` - Install the required packages.
  - `npx tailwindcss init -p`- Create the Tailwind CSS configuration file.
- [ ] Create a `tailwind.config.js` file in the root of the project and add the following code:

```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- [ ] Delete the `App.css` file.
- [ ] Delete the import of `App.css` in the `App.js` file.
- [ ] Delete the **CONTENTS** of the `index.css` file.
- [ ] Add the following code to the `index.css` file:

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

- Test the installation by adding a Tailwind CSS class to an element in the `App.js` file.

```javascript
function App() {
  return (
    <div className="bg-red-500 text-3xl font-bold underline">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
```

<!-- TODO - Add screenshot of current status -->

### Create some Pages

- [ ] Create a `pages` folder in the `src` folder.
- [ ] Create a `HomePage.jsx` file in the `pages` folder.
- [ ] Create an `AboutPage.jsx` file in the `pages` folder.
- [ ] Create a `SkillsPage.jsx` file in the `pages` folder.
- [ ] Create a `ProjectsPage.jsx` file in the `pages` folder.

Each of the pages should be a functional component that returns a `div` with an `h1` tag that displays the name of the page. For example, the `HomePage.jsx` file should look like this:

```javascript
import React from "react";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default HomePage;
```

### The Big Questions

- [ ] How do we display these pages in the application?
  - Do we display them all at once? `NO!` - Only one page should be displayed at a time!
  - We need to display the `HomePage` when the user navigates to the root URL. e.g. `http://http://localhost:5173/`
- [ ] How do we set up the routes for these pages?
  - We want to display the `HomePage` when the user navigates to the root URL `http://localhost:5173/`.
  - We want to display the `AboutPage` when the user navigates to the `/about` URL. e.g. `http://localhost:5173/about`
  - We want to display the `SkillsPage` when the user navigates to the `/skills` URL. e.g. `http://localhost:5173/skills`
  - We want to display the `ProjectsPage` when the user navigates to the `/projects` URL. e.g. `http://localhost:5173/projects`
- [ ] How do we navigate between these pages?
  - We want to display a navigation bar at the top of the page with links to the different pages.
  - We want to be able for example be taken back when we click on `back to home` link on the `AboutPage` and `SkillsPage` and `ProjectsPage`.

### React Router Dom

React Router Dom is a package that provides routing capabilities to a React application. It allows us to set up routes for different pages in our application and to navigate between these pages.

- [ ] Install the `react-router-dom` package with `npm install react-router-dom`.

#### Setting up the Routes

When it comes to setting up the routes, there are several ways to do it. The following implementation is intended to make it easier to understand the concept of routing in a React application.

- [ ] Import the `BrowserRouter` in the `main.jsx` file.
- [ ] Wrap the `App` component with the `BrowserRouter` component.

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

- [ ] Import the `Routes` and `Route` components in the `App.jsx` file.
- [ ] Import the pages in the `App.jsx` file.
- [ ] Create a `Routes` component that contains the `Route` components for the different pages as follows:

```javascript
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;
```

- [ ] Test the application by navigating to the different pages using the links in the navigation bar.
  - What happens when you navigate to the different pages? Try out the following:
    - Navigate to the root URL `http://localhost:5173/`
    - Navigate to the `/about` URL `http://localhost:5173/about`
    - Navigate to the `/skills` URL `http://localhost:5173/skills`
    - Navigate to the `/projects` URL `http://localhost:5173/projects`
  - The pages should be displayed when you navigate to the different URLs. For example, the `HomePage` should be displayed when you navigate to the root URL.

<!-- TODO - Add screenshot of current status -->

#### Next Questions

- [ ] How do we set up the navigation bar?
- [ ] How do we ensure that the navigation bar is displayed on all the pages?
- [ ] How do we navigate between the different pages?

### Navigation Bar

This is also a point where the implementation can vary. The following implementation is just one out of many ways to set up a navigation bar in a React application.

- [ ] Create a `components` folder in the `src` folder.
- [ ] Create a `NavbarComponent.jsx` file in the `components` folder.
- [ ] Create a functional component that returns a `nav` element with `ul` and `li` elements that contain the links to the different pages.

#### The `Link` Component from `react-router-dom`

- [ ] Use the `Link` component from `react-router-dom` to set up the links.
  - The `Link` component is used to set up the links to the different pages in the application.
  - It is similar to the `a` tag in HTML but it is used to set up links in a single page application.
  - The `to` prop is used to specify the path to the page that the link should navigate to.
  - For example, the `to` prop for the link to the `HomePage` should be set to `/`. - `<Link to="/">Home</Link>`

```javascript
import React from "react";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarComponent;
```

- Can we refactor the `NavbarComponent` component and map through the links to display them? Yes, we can. We can use the `map` method to map through an array of objects that contain the links and their paths.

```javascript
import React from "react";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const links = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/skills", name: "Skills" },
    { path: "/projects", name: "Projects" },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

- [ ] Import the `NavbarComponent` component in the `App.jsx` file.
- [ ] Add the `NavbarComponent` component to the `App` component.

```javascript
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;
```

- Do you see the navigation bar at the top of the page?🤔
- Try navigating to the different pages using the links in the navigation bar.🤩

<!-- TODO - Add screenshot of current status -->

Congratulations! You have successfully set up a React application with routing using the `react-router-dom` package.

Now let me introduce the `Outlet` component from `react-router-dom` to you.

#### The `Outlet` Component

The `Outlet` component is used to display the child routes of a parent route.

- In our case, the `Outlet` component will be used in the `NavbarComponent` component to display the child routes of the parent route.

- [ ] Import the `Outlet` component in the `NavbarComponent` component.
- [ ] Add the `Outlet` component to the `NavbarComponent` component below the `ul` element.

```javascript
import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavbarComponent() {
  const links = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/skills", name: "Skills" },
    { path: "/projects", name: "Projects" },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </nav>
  );
}

export default NavbarComponent;
```

- The other pages will be displayed below the navigation bar when you navigate to the different pages using the links in the navigation bar.
- What happens if we place the `Outlet` component above the `ul` element?
- To find out, let us first adjust the `App.jsx` file as follows:

- [ ] Create a `Route` component with opening and closing tags for the `NavbarComponent` and set the `path` prop to `/`. `<Route path="/" element={<NavbarComponent />} ></Route>`

- [ ] Set the `element` prop of the `Route` component to `<NavbarComponent />`.
- [ ] Remove the `path` prop from the `Route` component for the `HomePage`.
- [ ] Write `index` in the `Route` component for the `HomePage` as follows: `<Route index element={<HomePage />} />`.
  - The `index` prop is used to specify the route that should be displayed when the user navigates to the root URL.
- [ ] Move all the other `Route` components to the `NavbarComponent` component.

```javascript
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavbarComponent />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
```

- Your application should still work as expected. The pages should be displayed when you navigate to the different URLs.
- For the moment, we can style each page with Tailwind CSS and add some content to them.

### Nano ID

[Nano ID](https://github.com/ai/nanoid#readme) is a package that provides a way to generate unique IDs for elements in a React application.

- [ ] Install the `nanoid` package with `npm install nanoid`.
- [ ] Import the `nanoid` function in the `NavbarComponent` component.
- [ ] Use the `nanoid` function to generate a unique ID for each link in the `NavbarComponent` component.

```javascript
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { nanoid } from "nanoid";

function NavbarComponent() {
  const links = [
    { id: nanoid(), path: "/", name: "Home" },
    { id: nanoid(), path: "/about", name: "About" },
    { id: nanoid(), path: "/skills", name: "Skills" },
    { id: nanoid(), path: "/projects", name: "Projects" },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </nav>
  );
}

export default NavbarComponent;
```

## Summary

In order to implement routing in a React application with the `Browser Router` from the `react-router-dom` package, you need to:

1. Install the `react-router-dom` package.
2. Wrap the `main.jsx` file with the `BrowserRouter` component.
3. Set up the routes for the different pages in the `App.jsx` file using the `Routes` and `Route` components.
4. Set up the navigation bar with the links to the different pages using the `Link` and `Outlet` components.

## Next Steps

- In the next stage, we will proceed as follows:
  - [ ] Set up a `404` page to display when the user navigates to a URL that does not exist.
  - [ ] Set up nested routes for the different pages.
  - [ ] Set up a `Redirect` component to redirect the user to a different page when they navigate to a specific URL.
  - [ ] Set up a `useNavigate` hook to navigate to a different page programmatically.
  - [ ] Set up a `useParams` hook to access the parameters in the URL.
