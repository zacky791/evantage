import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

function App() {
  // const isAuthenticated = localStorage.getItem('isAuthenticated') === "true";
  // console.log('lll', isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/admin"
          // element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
          element={ <Dashboard />}
        />
      </Routes>
    </Router>
  );
}

export default App;
