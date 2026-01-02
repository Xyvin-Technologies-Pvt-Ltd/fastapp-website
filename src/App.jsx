import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
