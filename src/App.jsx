
import './App.css'
import Homepage from './Pages/Homepage'
import SignInPage from './Pages/SignInPage';
import Menupage from './Pages/Menupage';
import UserProfilePage from './Pages/UserProfilePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BurgerProvider } from './Context/BurgerContext';
import { UserProvider } from './Context/UserContext';

function App() {

  return (
    <>
    <BurgerProvider>
    <UserProvider>
    <Router>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/Menu" element={<Menupage/>}/>
            <Route path="/SignIn" element={<SignInPage/>} />
            <Route path="/Profile/:id" element={<UserProfilePage/>} />
        </Routes>
    </Router>
    </UserProvider>
</BurgerProvider>
    </>
  )
}

export default App
