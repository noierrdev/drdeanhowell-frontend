import { ThemeProvider, createTheme } from "@mui/material";
import AppContext from './AppContext'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import store from './store'
function App() {
  const theme=createTheme({});
  return (
    <AppContext.Provider value={{}} >
      <Provider store={store} >
        <ThemeProvider theme={theme} >
          <BrowserRouter>
            <AppRoutes/>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </AppContext.Provider>
  );
}

export default App;
