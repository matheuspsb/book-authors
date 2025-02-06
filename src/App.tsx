import { Theme } from "@radix-ui/themes";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LibraryProvider } from "./context/LibraryContext";
import routes from "./routes/index.routes";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LibraryProvider>
        <Theme>
          <RouterProvider router={routes} />
        </Theme>
      </LibraryProvider>
    </ThemeProvider>
  );
}

export default App;
