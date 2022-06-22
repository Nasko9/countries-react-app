import { BrowserRouter as Router } from "react-router-dom";

// Layout
import Header from "./components/Layout/Header";

// Routes
import Routes from "./containers/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
