import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/admin"
          element={ <Dashboard />}
        />
      </Routes>
    </Router>
  );
}

export default App;
