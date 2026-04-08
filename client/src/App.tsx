import { Route, Routes } from "react-router-dom";
import ExplorePage from "./pages/ExplorePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExplorePage />} />
    </Routes>
  );
}

export default App;

