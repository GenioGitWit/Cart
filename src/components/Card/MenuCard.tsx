import { Container, Col, Card } from 'react-bootstrap';

function MenuCard() {
    return(
        // <Container style={{display : 'flex', flexDirection : 'row', flexWrap : 'wrap'}}>
            // <Col xs={12} sm={12} md={12} lg={6} xl={7}  style={{padding : '2%'}}>
                <Card >
                    <Container style={{display : 'flex', flexDirection : 'row', margin : '4px', padding : '4px', flexWrap : 'wrap-reverse'}}>
                        <Col xs={12} sm={12} md={8} lg={8} style={{border : '1px solid black', textAlign : 'start', padding : '2% 2%'}}>
                            <Card.Title>Tikka Burger</Card.Title>
                            <Card.Subtitle>Rs.60</Card.Subtitle>
                            <Card.Text>This is very delicious</Card.Text>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} style={{border : '1px solid green'}}>
                            <Card.Img style={{height : '120px', border : '1px solid black', padding : '4%', zIndex : 0 }} />
                        </Col>
                    </Container>
                </Card>
            // </Col>
        // </Container>
    );
};

export default MenuCard;