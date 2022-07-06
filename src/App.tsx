import { BrowserRouter as Router } from "react-router-dom";

// Layout
import Header from "./components/Layout/Header";
import ReactQuryProviders from "./components/Providers/ReactQueryProvider";

// Routes
import Routes from "./containers/Routes";

function App() {
  return (
    <div className="App">
      <ReactQuryProviders>
        <Router>
          <Header />
          <Routes />
        </Router>
      </ReactQuryProviders>
    </div>
  );
}

export default App;
