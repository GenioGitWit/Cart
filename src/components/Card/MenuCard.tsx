import { Container, Col, Card } from 'react-bootstrap';
import { Item } from '../../screens/Menu';
import Buttons from './Buttons'
import img from '../../Images/download.jpg'


interface Props {
    item? : Item;
    cart? : Item;
};

function MenuCard({ item, cart } : Props) {
    // console.log('MenuCard item : ', item);
    // console.log(cart)
    return(
        <Card >
            <Container style={{display : 'flex', flexDirection : 'row', margin : '4px', padding : '4px', flexWrap : 'wrap-reverse'}}>
                <Col xs={12} sm={12} md={8} lg={8} style={{border : '1px solid black', textAlign : 'start', padding : '2% 2%'}}>
                    <Card.Title>{ item ? item.item_name : null }</Card.Title>
                    <Card.Subtitle>Rs.{ item ? item.price : null }</Card.Subtitle>
                    <Card.Text>This is very delicious</Card.Text>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} style={{border : '1px solid green'}}>
                    <Card.Img src={img} style={{height : '160px', width : '160px', border : '1px solid black', padding : '4%', zIndex : 0 }} />
                    <Buttons cart={cart} item={item} />
                </Col>
            </Container>
        </Card>
    );
};

export default MenuCard;