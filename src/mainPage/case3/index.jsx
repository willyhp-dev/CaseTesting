import {
  Navbar,
  Container,
  Carousel,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import rumah1 from "../images/rumah1.jpg";
import rumah2 from "../images/rumah2.jpg";
import rumah3 from "../images/rumah3.jpg";
import "./index.css";
import { Link } from "react-router-dom";
export default function Case3page() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Perumahan Komplek</Navbar.Brand>

          <Link to ="/case2" element="">
            <Navbar.Brand href="#home">Case 2</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={rumah1}
            alt="First slide"
            height="600px"
          />
          <Carousel.Caption>
            <h3>Rumah Komplek pertama</h3>
            <p>Pontianak , west kalimantan</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={rumah2}
            alt="Second slide"
            height="600px"
          />
          <Carousel.Caption>
            <h3>Rumah Komplek kedua</h3>
            <p>Pontianak , west kalimantan</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={rumah3}
            alt="Third slide"
            height="600px"
          />
          <Carousel.Caption>
            <h3>Rumah Komplek kedua</h3>
            <p>Pontianak , west kalimantan</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="mt-3">
        <Row className="mb-4">
          <Col sm={3}>
            <Card className="shadow">
              <img src={rumah1} alt="Rumah1" height="200px" />
              <Card.Title>
                <b>Rumah 1</b>
              </Card.Title>
              <p>Lokasi : Pontianak, West kalimantan</p>
              <Card.Footer>
                <Button className="btn btn-secondary btn-sm mr-2">
                  Detail
                </Button>{" "}
                <Button className="btn btn-primary btn-sm">Cart</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={3}>
            <Card className="shadow">
              <img src={rumah1} alt="Rumah1" height="200px" />
              <Card.Title>
                <b>Rumah 1</b>
              </Card.Title>
              <p>Lokasi : Pontianak, West kalimantan</p>
              <Card.Footer>
                <Button className="btn btn-secondary btn-sm mr-2">
                  Detail
                </Button>{" "}
                <Button className="btn btn-primary btn-sm">Cart</Button>
              </Card.Footer>
            </Card>
          </Col>

          <Col sm={3}>
            <Card className="shadow">
              <img src={rumah1} alt="Rumah1" height="200px" />
              <Card.Title>
                <b>Rumah 1</b>
              </Card.Title>
              <p>Lokasi : Pontianak, West kalimantan</p>
              <Card.Footer>
                <Button className="btn btn-secondary btn-sm mr-2">
                  Detail
                </Button>{" "}
                <Button className="btn btn-primary btn-sm">Cart</Button>
              </Card.Footer>
            </Card>
          </Col>

          <Col sm={3}>
            <Card className="shadow">
              <img src={rumah1} alt="Rumah1" height="200px" />
              <Card.Title>
                <b>Rumah 1</b>
              </Card.Title>
              <p>Lokasi : Pontianak, West kalimantan</p>
              <Card.Footer>
                <Button className="btn btn-secondary btn-sm mr-2">
                  Detail
                </Button>{" "}
                <Button className="btn btn-primary btn-sm">Cart</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col sm={3}>
            <Card className="shadow">
              <img src={rumah1} alt="Rumah1" height="200px" />
              <Card.Title>
                <b>Rumah 1</b>
              </Card.Title>
              <p>Lokasi : Pontianak, West kalimantan</p>
              <Card.Footer>
                <Button className="btn btn-secondary btn-sm mr-2">
                  Detail
                </Button>{" "}
                <Button className="btn btn-primary btn-sm">Cart</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={3}>
            <Card className="shadow">
              <img src={rumah1} alt="Rumah1" height="200px" />
              <Card.Title>
                <b>Rumah 1</b>
              </Card.Title>
              <p>Lokasi : Pontianak, West kalimantan</p>
              <Card.Footer>
                <Button className="btn btn-secondary btn-sm mr-2">
                  Detail
                </Button>{" "}
                <Button className="btn btn-primary btn-sm">Cart</Button>
              </Card.Footer>
            </Card>
          </Col>

          <Col sm={3}>
            <Card className="shadow">
              <img src={rumah1} alt="Rumah1" height="200px" />
              <Card.Title>
                <b>Rumah 1</b>
              </Card.Title>
              <p>Lokasi : Pontianak, West kalimantan</p>
              <Card.Footer>
                <Button className="btn btn-secondary btn-sm mr-2">
                  Detail
                </Button>{" "}
                <Button className="btn btn-primary btn-sm">Cart</Button>
              </Card.Footer>
            </Card>
          </Col>

          <Col sm={3}>
            <Card className="shadow">
              <img src={rumah1} alt="Rumah1" height="200px" />
              <Card.Title>
                <b>Rumah 1</b>
              </Card.Title>
              <p>Lokasi : Pontianak, West kalimantan</p>
              <Card.Footer>
                <Button className="btn btn-secondary btn-sm mr-2">
                  Detail
                </Button>{" "}
                <Button className="btn btn-primary btn-sm">Cart</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>

      <Card className="mt-4 bg-primary text-white heights">
        <Container className="mt-5">
          <Row>
            <Col sm={7}>
              <p>Willy Handoyo Putra</p>
              <p>087734635840 (WA Only)</p>
              <p>Pontianak, West Kalimantan</p>
            </Col>
            <Col sm={4}>
              <p>link Github</p>
              <p></p>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
}
