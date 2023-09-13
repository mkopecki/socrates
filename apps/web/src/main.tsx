import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./components/theme-provider";
import { Chat } from "./chat/Chat";
import { Layout } from "./layout/Layout";
import { History } from "./history/History";

// temporary layout management
const withLayout = (component: React.ReactNode): React.ReactNode => <Layout>{component}</Layout>;

// routing
const router = createBrowserRouter([{ path: "/", element: withLayout(<Chat />) }, {path: "/history", element: withLayout(<History />)}]);

// react query
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
