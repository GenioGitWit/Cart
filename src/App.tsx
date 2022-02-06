import * as React from 'react';
import store from './Redux/store';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom' 
import Menu from './screens/Menu';
import Cart from './screens/Cart';
import { getItems, clearStore } from './Redux/slices/ItemSlice';
import { addToCart } from './Redux/slices/CartSlice';
import { Item } from './screens/Menu';
import './App.scss';

function App() {

  const items = useSelector((state : any) => state.Items);
  const cart = useSelector((state : any) => state.Cart);
  console.log('cart arry is : ', cart);

  React.useEffect(() => {
      const res = axios.get(' https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7');
      console.log('res is : ', res)
      res.then(
          res => { console.log('problem : ', res.data['0']); store.dispatch(getItems(res.data.slice(0,20)))})
          .catch((error) => console.log(error));
      // return () => {
      //     store.dispatch(clearStore(items))
      //     }
  }, []);
  
  console.log('store items : ', items);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Menu items={items[0]} cart={cart} />} />
          <Route path='/cart' element={<Cart cartFinal={cart} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
