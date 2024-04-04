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
There's also no way to get to this new page while clicking on any links. You need to use the attribute `href` to do that.

#### Creating Pages Component

On the `Components` directory, create a JavaScript file. On this file, you will export the HTML code of your new component. Here is an example:

```javascript
export default function Header() {
    return (
        <header className="App-header">
            <a href="/" className="App-logo">Logo</a>

            <nav>
                <a href="/newpage">New Page</a>
            </nav>
        </header>
    );
}
```
When this component is running on your web app, as you click on the `Logo` link, you will be redirected to the index page specified on your routes since the `href` attribute is set to `/`. The same way, when you click on the `New Page` link, you will be redirected to the new page specified on your routes since the `href` attribute is set to `/newpage`.  
Now import your component and add an HTML tag named after your component. Your component, function, and tag name must match. Since on this case the exported component function is called `Header()`, its file name must be called `Header.js`, and the HTML tag is `<Header />`. Your `App.js` will look something like this:

```javascript
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <Routes>

        <Route index element={
            <div className="Index">
                <Header />

            </div>
        } />

        <Route path={'/newpage'} element={
            <div className="NewPage">
                <Header />
                
            </div>
        } />

    </Routes>

  );
}

export default App;
```