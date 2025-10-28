import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
function GrillaComponent() {



    return (
        <Container>
            <h2  padding="3" className="justify-content-md-center mt-3" >Titulo Completo</h2>
            <Row  padding="3" className="justify-content-md-center mt-3">
                <Col lg="3">
                    <Card><Card.Body>1 de 3</Card.Body></Card>
                </Col>
                <Col lg="3">
                    <Card><Card.Body>2 de 3</Card.Body></Card>
                </Col>
                <Col lg="3">
                    <Card><Card.Body>3 de 3</Card.Body></Card>
                </Col>
            </Row>
            <Row padding="3" className="justify-content-md-center mt-3">
                
                <Col lg="6">
                    <Card><Card.Body>texto ocupa la mitad de la pantalla</Card.Body></Card>
                </Col>
                <Col lg="6">
                    <Card><Card.Body>texto ocupa la otra mitad</Card.Body></Card>
                </Col>

            </Row>
            <footer>
                 <Container>
                    <Row>
                        <Col className="text-center">
                            <p>© 2025 Santiago y Saihara</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </Container>
       
    )


}
export default GrillaComponent;