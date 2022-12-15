import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageClient from './pages/client/HomePageClient';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePageClient />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
