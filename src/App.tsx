import { Route, BrowserRouter as Router, Routes } from 'react-router-dom' 
import Menu from './screens/Menu';
import Cart from './screens/Cart';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Menu />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
