import './App.scss';
import './Responsive.scss';
import Home from './Components/Home'
import toast, { Toaster } from 'react-hot-toast';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Services from './Pages/Services';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Toaster />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/xizmatlar' element={<Services />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
