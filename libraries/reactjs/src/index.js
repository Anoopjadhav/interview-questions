// 1.  Render Props
// 2.  React Hooks, why ?
// 3.  Context, why ?
// 4.  useReducer and useState
// 5.  React 18 features
// 6.  Difference between React class and functional components



// After
import App from './App/App.js'

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);