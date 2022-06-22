import { BrowserRouter as Router } from "react-router-dom";

// Routes
import Routes from "./containers/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
