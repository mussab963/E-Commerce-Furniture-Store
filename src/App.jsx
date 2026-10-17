import { Route, Routes } from "react-router-dom";
import CategoryPage from "./Pages/CategoryPage";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
