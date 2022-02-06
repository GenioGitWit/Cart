import { Container, Button } from 'react-bootstrap';
import { Item } from '../../screens/Menu';
import { addToCart, removeFromCart } from '../../Redux/slices/CartSlice';
import store from '../../Redux/store';

interface Props {
    item? : Item;
    cart? : Item;
};

function Buttons({ item, cart } : Props) {
    // console.log('item count : ', item);
    // console.log('cart count : ', cart);
    return(
    <Container fluid style={{display : 'flex', flexWrap : 'nowrap', justifyContent : 'center', zIndex : 1}}>
        <Button 
            variant='light' 
            style={{height : '40px',  width : '70px', justifySelf : 'center'}} 
            size='sm'
            onClick={() => { store.dispatch(removeFromCart(item)) }}
            >-</Button>
        {/* <h3>{ item ? item.count : null  }</h3> */}
        <h3>{ cart ? cart.count : null  }</h3>
         <Button 
            variant='light' 
            style={{height : '40px', width : '70px', justifySelf : 'center'}} 
            size='sm'
            onClick={() => store.dispatch(addToCart(item))}
            >+</Button>
    </Container>
    );
};

export default Buttons;