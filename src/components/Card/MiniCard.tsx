import { Container, Col, Card } from 'react-bootstrap';  
import Buttons from './Buttons';

function MiniCard() {
    return(
        <Card >
            <Container style={{display : 'flex'}}>
                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                    <Card.Title>Tikka Burger</Card.Title>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} style={{ display : 'flex', flexWrap : 'nowrap', marginLeft : '1.5rem'}}>
                    <Buttons />
                </Col>
            </Container>
        </Card>
    );
};

export default MiniCard;