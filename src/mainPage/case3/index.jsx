import {
  Navbar,
  Container,
  Carousel,
  Row,
  Col,
  Card,
  
} from "react-bootstrap";

import "./index.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
export default function Case3page() {
  const [data, setdata] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemPerPage] = useState(10);

  const AxiosData = useCallback(async () => {
    try {
      const url = `https://newsapi.org/v2/everything?q=tesla&from=2022-05-19&sortBy=publishedAt&apiKey=9c2510131de24d47a20d9f258085ac19`;
      let response = await axios.get(url);
      setdata(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    AxiosData();
  }, [AxiosData]);
  
  let items = [];
  for (
    let number = 1;
    number <= Math.ceil(data.length / itemPerPage);
    number++
  ) {
    items.push(number);
  }
  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };
  const indexofLastItem = currentPage * itemPerPage;
  const indexofFirstItem = indexofLastItem - itemPerPage;
  const currentItem = data.slice(indexofFirstItem, indexofLastItem);
  const paginations = items.map((numbers) => (
    <li
      className={`btn btn-outline-primary btn-sm mr-1 ${
        currentPage === numbers ? "active" : null
      } `}
      key={numbers}
      id={numbers}
      onClick={handleClick}
    >
      {numbers}
    </li>
  ));

  const Navbars = () => {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Berita Internasional</Navbar.Brand>

          <Link to="/case2" element="">
            <Navbar.Brand href="#home">Case 2</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    );
  };

  return (
    <div>
      <Navbars />
      <Carousel>
        {data.map((item) => (
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={item.urlToImage}
              alt="First slide"
              height="600px"
            />
            <Carousel.Caption>
              <h3>{item.author}</h3>
              <p>{item.title}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Container className="mt-3">
         <ul className="float-right">{paginations}</ul>
        <Row className="mb-4">
          {currentItem.map((item) => (
            <Col sm={4} className="mb-4">
              <Card className="shadow">
                <img src={item.urlToImage} alt="Rumah1" height="200px" />
                <Card.Title>
                  <b>{item.author}</b>
                </Card.Title>
                <p>{item.title}</p>
                <Card.Footer>
                  <a href={item.url} className="btn btn-secondary mr-2">
                    link
                  </a>{" "}
                </Card.Footer>
              </Card>
            </Col>
          ))}
          
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
              <a href ="https://github.com/willyhp-dev/CaseTesting" className ="text-white">https://github.com/willyhp-dev/CaseTesting</a>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
}
