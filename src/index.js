import { createRoot } from 'react-dom/client';
// App File
import App from './App';
// Css File
import './index.css';
// React Router
import { BrowserRouter as Router } from 'react-router-dom';
// Context API
import Context from './Context';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Context>
        <Router>
            <App />
        </Router>
    </Context>
);