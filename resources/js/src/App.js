import "./App.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./utilities/context/authContext";
import { AppProvider } from "./utilities/context/appContext";
import { RequestsProvider } from "./utilities/context/requestsContext";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "./routers/renderRoutes";
import routes from "./routers/routes";
import MainLoadable from "./components/loader";

function App() {
  return (
      <AppProvider>
          <AuthProvider>
              <RequestsProvider>
                  <BrowserRouter>
                      <MainLoadable>
                          {renderRoutes(routes)}
                          <ToastContainer />
                      </MainLoadable>
                  </BrowserRouter>
              </RequestsProvider>
          </AuthProvider>
      </AppProvider>
  );
}

export default App;
