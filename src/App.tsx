import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import NotFountPage from "./pages/NotFound";
import './styles/index.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFountPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
