import store from '../../Redux/store'; 
import { removeItem, decrementCount, incrementCount, clearCart } from '../../Redux/slices/CartSlice'; 
import { Card, Container, Col, ButtonGroup, ToggleButton, Button, Form, FormText } from 'react-bootstrap';
import { Item } from '../../screens/Menu';

interface Props {
    cartItem : Item;
    img : string;
};


function CheckoutCard({ cartItem, img } : Props) {

    return(
        <Card>
        <Card.Header style={{border : '1px solid black'}}>
            <Container fluid style={{display : 'flex', flexWrap : 'wrap'}}>
                <Col lg={7} style={{display : 'flex'}}>
                    <Col lg={4}>
                        <Card.Img src={img} style={{height : '120px', width : '120px', border : '1px solid black'}} />
                    </Col>
                    <Col lg={8}>
                        <Card.Subtitle>
                            { cartItem ? cartItem.item_name : null }
                        </Card.Subtitle>
                        <Card.Text>
                            So Yummy!
                        </Card.Text>
                        <ButtonGroup className="mb-2">
                            <ToggleButton onClick={() => store.dispatch(removeItem(cartItem))} variant='light' style={{width : 'auto', color : 'grey', border : '2px solid grey'}} value={'one'}>Remove</ToggleButton>
                            <ToggleButton onClick={() => {}} variant='light' style={{width : 'auto', color: 'red',  border : '2px solid red'}}  value={'two'}>Favorite</ToggleButton>
                        </ButtonGroup>
                    </Col>
                </Col>  
                <Col lg={5} xl={5} style={{display : 'flex'}}>
                    <Col lg={6} style={{display : 'flex', marginTop : '28px', flexDirection : 'column', justifyContent : 'center'}} >
                        <input onInput={(e : any) => {
                            if(e.target.value<cartItem.count) {
                                return store.dispatch(decrementCount({id : cartItem.id, value : e.target.value}));
                            }else if(e.target.value) {
                                return store.dispatch(incrementCount({id : cartItem.id, value : e.target.value}));
                            } else return;
                        }} style={{justifySelf : 'end'}} defaultValue={cartItem.count} type='number' min={0} max={20} />
                    </Col>
                    <Col lg={6} style={{display : 'flex', marginTop : '28px', flexDirection : 'column', justifyContent : 'center'}} >
                        <Card.Text>
                            Rs.{ cartItem ? cartItem.price : null}
                        </Card.Text>    
                    </Col>  
                </Col>
            </Container>
        </Card.Header>
    </Card>
    );
};

export default CheckoutCard;