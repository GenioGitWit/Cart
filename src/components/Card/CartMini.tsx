import { Container, Col, Card } from 'react-bootstrap';
import MiniCard from './MiniCard';

function CartMini() {
    return(
        // <Container>
            // <Col xs={12} sm={12} md={12} lg={6} xl={5} style={{padding : '2%'}}>
                <Card style={{textAlign : 'start'}}>
                    <Container>
                        <Card.Title>CART</Card.Title>
                        <Card.Subtitle>2 Items</Card.Subtitle>
                        <Card.Body>
                            <MiniCard />
                        </Card.Body>
                    </Container>
                </Card>
            // </Col>
        // </Container>
    );
}

export default CartMini;