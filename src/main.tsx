import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme } from "./theme/theme.ts";
import TodoContextProvider from "./context/TodoContextProvider.tsx";

const customTheme = extendTheme(theme);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={customTheme}>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </ChakraProvider>
);
