import "./App.scss";
import { HomeScreen } from "./pages";
import { HOME } from "./routes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path={HOME} element={<HomeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
