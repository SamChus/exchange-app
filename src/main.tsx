import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom"; // Ensure correct import
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./Routes/Routes"; // Ensure correct path
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RouterProvider router={router} />{" "}
        {/* Ensure this is inside ChakraProvider */}
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
