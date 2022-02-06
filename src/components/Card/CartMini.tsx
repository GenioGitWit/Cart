import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Container, Col, Button, Card } from 'react-bootstrap';
import MiniCard from './MiniCard';
import { Item } from '../../screens/Menu';


interface Props {
    cart : Item[] | any;
};

function CartMini({ cart } : Props) {
    console.log('cart array 1111 is : ', cart);
    const subtotal = cart.reduce((prev : any, item : any) => { return prev+(item.price*item.count)}, 0)
    const item = useSelector((state : any) => state.Items);
    return(
        // <Container>
            // <Col xs={12} sm={12} md={12} lg={6} xl={5} style={{padding : '2%'}}>
                <Card style={{textAlign : 'start'}}>
                    <Container>
                        <Card.Title>CART</Card.Title>
                        <Card.Subtitle>{cart ? cart.length : null} Items</Card.Subtitle>
                        <Card.Body>
                            { cart ? cart.map((cartItem : Item, index : number) => <MiniCard key={index} cart={cartItem} />) : null}
                        </Card.Body>
                        <Card.Footer>
                            <Card.Text>Total : Rs. { subtotal } </Card.Text>
                            <Link to='/cart'>
                                <Button style={{ height : '50px', width : '100%' }} size='lg' variant='success'>Checkout</Button>
                            </Link>
                        </Card.Footer>
                    </Container>
                </Card>
            // </Col>
        // </Container>
    );
}

export default CartMini;