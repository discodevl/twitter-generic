import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from 'react-router-dom';
import Feed from "./components/Feed/Feed";
import SideBar from "./components/SideBar/SideBar";
import Trends from "./components/Trends/Trends";
import Explore from "./components/Explore/Explore";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {

  return (
    <Container>
      <Row>
        <Col lg={3} className="border-nav-right">
          <SideBar />
        </Col>
        <Col lg={6}>
          <Routes>
            <Route path="/" element={<Feed />}/>
            <Route path="/explore" element={<Explore />}/>
            <Route path="/bookmarks" element={<Bookmarks />}/>
            <Route path="/:user" />
          </Routes>
          
        </Col>
        <Col lg={3} className="border-nav-left">
          <Trends />
        </Col>
      </Row>
    </Container>
  )
}

export default App
