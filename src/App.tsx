import { BrowserRouter as Router } from "react-router-dom";

// Layout
import Header from "./components/Layout/Header";
import ErrorBoundary from "./components/Providers/ErrorBoundary";
import SearchContextProvider from "./containers/Home/SearchContext";

// Routes
import Routes from "./containers/Routes";

function App() {
  return (
    <div className="App h-screen bg-primary">
      <ErrorBoundary>
        <SearchContextProvider>
          <Router>
            <Header />
            <Routes />
          </Router>
        </SearchContextProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
