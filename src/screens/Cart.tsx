import { Container, Col} from 'react-bootstrap';
import Navbar from '../components/Checkout/Navbar';
import CheckoutBox from '../components/Checkout/CheckoutBox';
import CheckoutCard from '../components/Checkout/CheckoutCard';
import Layout from '../components/Checkout/Layout';
import { Item } from '../screens/Menu';
import img from '../Images/download.jpg';

interface Props {
    cartFinal : Item[]
};

function Cart({ cartFinal } : Props) {
    return (
        <>
        <Navbar cartFinal={cartFinal} />
        <Container fluid style={{display : 'flex', flexWrap : 'wrap'}} >
            <Col xs={12} sm={12} md={12} lg={7} xl={7}  style={{padding : '2%'}}>
                <Layout />
                { cartFinal.map((item : Item, index : number, array) => <CheckoutCard cartItem={item} img={img} />) }
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={4} style={{padding : '2%'}}>
                <CheckoutBox cartFinal={cartFinal} />
            </Col>
        </Container>
    </>
    );
};

export default Cart;