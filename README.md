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

## Routes

### Configurations

Import `BrowserRouter` to your index.js, it should look like this:

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

Make sure you have the `react-router-dom` dependency installed:

```
npm install react-router-dom -S
```

Add the app routes on `App.js`:

```javascript
import './App.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route index element={
        <div className="App">
        </div>
      } />
    </Routes>

  );
}

export default App;
```

### Creating Pages

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