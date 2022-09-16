import "./App.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./utilities/context/authContext";
import { RequestsProvider } from "./utilities/context/requestsContext";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "./routers/renderRoutes";
import routes from "./routers/routes";
import MainLoadable from "./components/loader";

function App() {
  return (
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
  );
}

export default App;
