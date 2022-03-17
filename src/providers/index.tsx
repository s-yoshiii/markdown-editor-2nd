import { ThemeProvider } from './Theme';
import * as React from 'react';
export const Providers: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
