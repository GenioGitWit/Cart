import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import {Item} from '../../screens/Menu';

interface Props {
    cartFinal : Item[];
};

function CheckoutBox({ cartFinal } : Props) {
    const subtotal = cartFinal.reduce((prev : any, item : any ) => { return prev+(item.price*item.count)}, 0);
    let discountTag : any;
    const quantity = cartFinal.length;

    if(subtotal<=100) {
        discountTag = 0;
    } else if(subtotal>=101 && subtotal<=500) {
        discountTag = 10;
    } else {
        discountTag = 20;
    };

    const finalTotal = subtotal - (subtotal*discountTag)/100;

    return(
        <Card style={{textAlign : 'start', padding : '2rem 2rem'}}>
        <Container>
            <Card.Title style={{textAlign : 'center'}} >CART</Card.Title>
            <Card.Subtitle style={{textAlign : 'center'}}>{quantity} Items</Card.Subtitle>
            <Card.Body>
                <Card.Text>Subtotal : { subtotal } </Card.Text>
                <Card.Text>Discount : {discountTag}% </Card.Text>
                <Card.Text>Delivery : FREE</Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Text>Total : Rs.{finalTotal}</Card.Text>
                <Link to='/cart' style={{display : 'flex', justifyContent : 'center'}}>
                    <Button style={{ height : '50px', width : '80%'}} size='lg' variant='success'>Checkout</Button>
                </Link>
            </Card.Body>
        </Container>
    </Card>
    );
};

export default CheckoutBox;