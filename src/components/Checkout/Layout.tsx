import {Container, Card, Col} from 'react-bootstrap';

function Layout() {
    return(
        <Card>
        <Card.Header style={{display : 'flex'}} >
            <Container fluid style={{display : 'flex', flexWrap : 'nowrap'}}>
                <Col lg={7} style={{display : 'flex', flexWrap : 'nowrap'}}>
                    <Col lg={4}>Product</Col>
                    <Col lg={8}></Col>
                </Col>
                <Col lg={5} style={{display : 'flex', flexWrap : 'nowrap'}}>
                    <Col lg={6}>Quantity</Col>
                    <Col lg={6}>Price</Col>  
                </Col>
            </Container>
        </Card.Header>
    </Card>
    );
};

export default Layout;