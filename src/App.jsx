import React from 'react';
import { Routes } from './routes';
import { TranslationProvider } from './pages/context/TranslationContext';

function App() {
  return (
    <TranslationProvider>
      <Routes />
    </TranslationProvider>
  );
}

export default App;
