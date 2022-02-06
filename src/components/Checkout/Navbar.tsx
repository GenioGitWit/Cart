import store from '../../Redux/store';
import { clearCart } from '../../Redux/slices/CartSlice'; 
import { Container, Col, Form, Button, Nav } from 'react-bootstrap';
import { Item } from '../../screens/Menu';

interface Props {
    cartFinal : Item[];
};

function Navbar({ cartFinal } : Props) {
    const quantity = cartFinal.length;
    return(
        <>
        <Container fluid >
            <Nav style={{display : 'flex', flexWrap : 'nowrap' , minHeight : '80px',  height : 'auto',  backgroundColor : '#212529', justifyContent : 'start'}}>
                <Nav.Item style={{color : 'white', margin : '10px 10px'}}>
                    <h1>McDonalds</h1>
                </Nav.Item>
                <Nav.Item style={{display : 'flex', height : '40px', width : '24rem', color : 'white', margin : '10px 10px', alignItems : 'center'}}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Nav.Item>
            </Nav>
            <Container fluid>
            <Nav style={{ margin : '1rem', height : '70px', border : '1px solid black'}}>
                <Container style={{display : 'flex', justifyContent : 'space-around'}} >
                    <Col xl={10} style={{display : 'flex', textAlign : 'center', justifyContent : 'center'}}>
                        <h3> Items in the Cart : {quantity} </h3>
                    </Col>
                    <Col xl={2} style={{display : 'flex', textAlign : 'center', justifyContent : 'center'}}>
                        <Button variant='secondary' onClick={() => store.dispatch(clearCart({value : []}))}>Clear Cart</Button>
                    </Col>
                </Container>
            </Nav>
            </Container>
        </Container>
    </>
    );
};

export default Navbar;