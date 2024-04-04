# react-nodejs-101
First steps on making a project utilizing React and Node.Js Express.

## Getting Started
On your empty workspace, create the `client` directory (it will hold your React app), and run the following command inside it:
```
npx create-react-app .
``` 
And to start your app:
```
npm start
```

## React Pages

React's `react-router-dom` package is very useful when creating new pages for your web application.

### Configurations

Import `BrowserRouter` on your index.js, and add the `App` inside of the `BrowserRouter` tag:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
```

Make sure you have the `react-router-dom` package installed:

```
npm install react-router-dom -S
```

Add the index page on `App.js`:

```javascript
import './App.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route index element={
        <div className="Index">
        </div>
      } />
    </Routes>

  );
}

export default App;
```

### Creating Pages

To add a new page on your web app, you select a path do this page, and insert a new route on `App.js`:

```javascript
import './App.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>

        <Route index element={
            <div className="Index">
            </div>
        } />

        <Route path={'/newpage'} element={
            <div className="NewPage">
            </div>
        } />

    </Routes>

  );
}

export default App;
```

Once your web app compile again, you can access this new page going to its URL: `localhost:3000/newpage`. It won't have anything, since there's only an empty div on it. You haven't added any components.

#### Creating Pages Component

On the `Components` directory, create a JavaScript file. On this file, you will export the HTML code of your new component. Here is an example:

```javascript
export default function NewComponent() {
    return (
        <div className="Component-body">
            <a
                className="Component-link"
                href="https://github.com/mattvie/react-nodejs-101"
                target="_blank"
                rel="noopener noreferrer"
            >
                Link
            </a>
        </div>
    );
}
```

Now import your component and add an HTML tag named after your component. Your component, function, and tag name must match. Since on this case the exported component function is called `NewComponent()`, its file name must be called `NewComponent.js`, and the HTML tag is `<NewComponent />`. Your page will look something like this:

```javascript
import './App.css';
import NewComponent from './Components/NewComponent';

function App() {
  return (
    <div className="App">
      <MainPageBody />
    </div>
  );
}

export default App;
```