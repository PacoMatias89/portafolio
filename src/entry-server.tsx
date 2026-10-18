import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';

// Punto de entrada usado solo en build para pre-renderizar el HTML estático.
export function render(): string {
  return renderToString(
    <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StrictMode>,
  );
}
