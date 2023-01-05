import { Routes, Route } from 'react-router-dom';

import Print from './components/Print'
import './App.css';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<} /> */}
      </Routes>
      
      {/* <Print /> */}
    </div>
  );
}

export default App;
