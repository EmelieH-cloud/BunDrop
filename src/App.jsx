
import './App.css'
import Homepage from './Pages/Homepage'
import SignInPage from './Pages/SignInPage';
import Menupage from './Pages/Menupage';
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
            <Route path="/Menu" element={<Menupage/>}/>
            <Route path="/SignIn" element={<SignInPage/>} />
            <Route path="/Profile/:id" element={<UserProfilePage/>} />
        </Routes>
    </Router>
 </ContextProvider>
    </>
  )
}

export default App
