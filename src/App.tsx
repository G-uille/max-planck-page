import { BrowserRouter } from 'react-router-dom';
import * as React from 'react';
import AppRouter from './router/AppRouter';
import { PrimeReactProvider } from 'primereact/api';

const App: React.FC = () => {
  const value = {
        appendTo: 'self',
  };

  return (
    <BrowserRouter>
        <PrimeReactProvider value={value}>
          <AppRouter />
        </PrimeReactProvider>
    </BrowserRouter>
  );
}
export default App;
