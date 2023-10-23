import './App.css';
import { Navbar, Nav, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>              
      </header>
      <main>
        <Container>
      <Row className='px-4 my-5'>
        <Col sm={7}>
          <Image src="https://picsum.photos/id/30/900/400" fluid rounded/>
        </Col>        
        <Col sm={5}>
          <h1 class='font-weigh-light'>Tagline</h1>
          <p class="mt-4">O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. </p>
          <Button>Call to action</Button>
        </Col>
      </Row>      
      <Row>
        <Card className='text-center bg-secondary text-white my-5 py-4'>
          <Card.Body>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</Card.Body>
        </Card>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/id/61/320/200" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/id/76/320/200" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/id/69/320/200" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </main>
      <footer class="py-5 my-5 bg-dark">
      <Container className="px-4">
        <p class="text-center text-white">Copyright  &copy; Your website 2023</p>
      </Container>

      </footer>
    </div>
  );
}

export default App;
