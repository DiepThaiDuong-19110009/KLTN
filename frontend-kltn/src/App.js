import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageClient from './pages/client/HomePageClient';
import LoginPageClient from './pages/client/LoginPageClient';
import RegisterClient from './components/client/RegisterClient';
import ForgotPasswordClient from './components/client/ForgotPasswordClient';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePageClient />} />
          <Route path='/login' element={<LoginPageClient />} />
          <Route path='/register' element={<RegisterClient />} />
          <Route path='/forgotpassword' element={<ForgotPasswordClient />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
