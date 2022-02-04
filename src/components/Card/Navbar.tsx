import { Nav, Container, Button, Form } from 'react-bootstrap';

function Navbar() {
    return(
        <Container fluid>
            <Nav style={{height : '40px', backgroundColor : '#212529'}}>
                <Nav.Item style={{color : 'white', margin : '10px 10px'}}>
                    <h1>McDonalds</h1>
                </Nav.Item>
            </Nav> 
            <Nav style={{height : '40px', backgroundColor : '#212529'}}>
                <Nav.Item style={{color : 'white', margin : '20px 10px'}}>
                    Hello
                </Nav.Item>
            </Nav> 
            <Nav style={{height : '60px', backgroundColor : '#212529'}}>
                <Nav.Item style={{display : 'flex', width : '24rem', color : 'white', margin : '10px 10px'}}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Nav.Item>
                <Nav.Item style={{height : '40px', width : '8%', backgroundColor : 'White', padding : '8px', margin : '10px 20px'}}>
                    <Form.Check type='checkbox' label='Veg Only' />
                </Nav.Item>
                <Nav.Item style={{height : '40px', width : '8%', backgroundColor : 'White', padding : '8px', margin : '10px 20px'}}>
                    <Form.Check type='checkbox' label='Favorites' />
                </Nav.Item>
            </Nav>
        </Container>
    );
};

export default Navbar;