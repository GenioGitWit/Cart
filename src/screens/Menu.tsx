import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import Navbar from '../components/Card/Navbar';
import MenuCard from '../components/Card/MenuCard';
import CartMini from '../components/Card/CartMini';

function Menu() {
    return(
        <>
        <Navbar />
        <Container fluid style={{display : 'flex', flexWrap : 'wrap'}} >
            <Col xs={12} sm={12} md={12} lg={6} xl={7}  style={{padding : '2%'}}>
                <MenuCard />
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={5} style={{padding : '2%'}}>
                <CartMini />
            </Col>
        </Container>
        </>
    );
};

export default Menu;