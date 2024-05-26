import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import NotFountPage from './pages/NotFound';
import './styles/index.scss';

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFountPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
);

export default App;
