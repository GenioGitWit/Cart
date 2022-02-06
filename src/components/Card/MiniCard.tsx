import { Container, Col, Card } from 'react-bootstrap';  
import Buttons from './Buttons';
import { Item } from '../../screens/Menu'

interface Props {
    cart : Item;
};

function MiniCard({ cart } : Props) {

    return(
        <Card >
            <Container style={{display : 'flex', textAlign : 'start'}}>
                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                    <Card.Subtitle >{cart ? cart.item_name : null}</Card.Subtitle>
                    <Card.Subtitle >{cart ? cart.price : null}</Card.Subtitle>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} style={{ display : 'flex', flexWrap : 'nowrap', marginLeft : '1.5rem'}}>
                    { cart ? cart.count : null }
                </Col>
            </Container>
        </Card>
    );
};

export default MiniCard;