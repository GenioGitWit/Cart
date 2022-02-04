import { Container, Button } from 'react-bootstrap';

function Buttons() {
    return(
    <Container fluid style={{display : 'flex', flexWrap : 'nowrap', justifyContent : 'space-between', zIndex : 1}}>
        <Button style={{ width : '100%', justifySelf : 'center'}} size='sm'>-</Button>
        <h2>{0}</h2>
        <Button style={{width : '100%'}} size='sm'>+</Button>
    </Container>
    );
};

export default Buttons;