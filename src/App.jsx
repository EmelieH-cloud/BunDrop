
import './App.css'
import Homepage from './Pages/Homepage'
import SignInPage from './Pages/SignInPage';
import ConfirmationPage from './Pages/ConfirmationPage';
import Menupage from './Pages/Menupage';
import LexiconPage from './Pages/LexiconPage';
import RegisterPage from './Pages/RegisterPage';
import PaymentPage from './Pages/PaymentPage';
import UserProfilePage from './Pages/UserProfilePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContextProvider from './Context/ContextProvider';

function App() {

  return (
    <>
    <ContextProvider>
    <Router>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/menu" element={<Menupage/>}/>
            <Route path="/signIn" element={<SignInPage/>} />
              <Route path="/register" element={<RegisterPage/>} />
            <Route path="/dynamicSearch" element={<LexiconPage/>} />
            <Route path="/payment" element={<PaymentPage/>} />
            <Route path="/confirmation/:id" element={<ConfirmationPage/>} />
            <Route path="/Profile/:id" element={<UserProfilePage/>} />
        </Routes>
    </Router>
 </ContextProvider>
    </>
  )
}

export default App
