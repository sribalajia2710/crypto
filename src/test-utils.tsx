import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { render, RenderOptions } from "@testing-library/react";

const AllProviders: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

// Re-export everything
export * from "@testing-library/react";

// Override render method
export { customRender as render };