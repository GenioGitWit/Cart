import { Container, Col } from 'react-bootstrap';
import Navbar from '../components/Card/Navbar';
import MenuCard from '../components/Card/MenuCard';
import CartMini from '../components/Card/CartMini';

export interface Item {
    id : string;
    item_name : string;
    price : string;
    count : number;
};

export interface Props {
    items : Item[];
    cart : Item[];
};



function Menu({ items, cart } : Props) {
    console.log('cart array 2 is : ', cart);
    return(
        <>
        <Navbar />
        <Container fluid style={{display : 'flex', flexWrap : 'wrap'}} >
            <Col xs={12} sm={12} md={12} lg={6} xl={7}  style={{padding : '2%'}}>
                { items ? items.map((item : Item, index : number) => <MenuCard key={index} item={{...item, count : 1}} />).reverse() : null }
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={5} style={{padding : '2%'}}>
                <CartMini cart={cart} />
            </Col>
        </Container>
        </>
    );
};

export default Menu;