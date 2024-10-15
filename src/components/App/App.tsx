import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { RouterProvider } from "react-router-dom";
import router from "../../routes/routes";
import theme from "../../theme";

function App() {
  return (
    <>
      <CssBaseline>
        <CssVarsProvider theme={theme}>
          <RouterProvider router={router} />
        </CssVarsProvider>
      </CssBaseline>
    </>
  );
}

export default App;
