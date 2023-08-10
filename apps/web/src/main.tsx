import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Chat } from "./pages/Chat/Chat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// routing
const router = createBrowserRouter([{ path: "/", element: <Chat /> }]);

// react query
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
