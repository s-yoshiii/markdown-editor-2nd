import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';
export const RouterProvider: React.FC = ({ children }) => {
  return <Router>{children}</Router>;
};
