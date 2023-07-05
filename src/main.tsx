import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BaseLayout } from "./layouts/BaseLayout";
import { ChatPage } from "@/pages/chat";
import { History } from "@/pages/history";
import { Settings } from "@/pages/settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "chat",
        element: <ChatPage />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
