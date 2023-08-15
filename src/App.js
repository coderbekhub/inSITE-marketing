import './App.scss';
import './Responsive.scss';
import Home from './Components/Home'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Home />
    </div>
  );
}

export default App;
