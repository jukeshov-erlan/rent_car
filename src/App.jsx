import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
