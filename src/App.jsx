
import './App.css'
import Homepage from './Pages/Homepage'
import Menupage from './Pages/Menupage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BurgerProvider } from './Context/BurgerContext';

function App() {

  return (
    <>
    <BurgerProvider>
    <Router>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/Menu" element={<Menupage/>}/>
        </Routes>
    </Router>
</BurgerProvider>
    </>
  )
}

export default App
