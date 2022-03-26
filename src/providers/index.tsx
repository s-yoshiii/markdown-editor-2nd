import { ThemeProvider } from './Theme';
import { RouterProvider } from './Router';
import * as React from 'react';
const { StrictMode } = React;
export const Providers: React.FC = ({ children }) => {
  return (
    <StrictMode>
      <ThemeProvider>
        <RouterProvider>{children}</RouterProvider>
      </ThemeProvider>
    </StrictMode>
  );
};
