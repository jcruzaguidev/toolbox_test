import { HashRouter } from "react-router-dom";
import Navigation from "./routes/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
    </HashRouter>
  );
}

export default App;
