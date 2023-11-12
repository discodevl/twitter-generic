import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes, useLocation } from "react-router-dom";
import Bookmarks from "./page/Bookmarks/Bookmarks";
import SideBar from "./components/SideBar/SideBar";
import Trends from "./components/Trends/Trends";
import useGetUserID from "./hooks/useGetUserID";
import Explore from "./page/Explore/Explore";
import Home from "./page/Home/Home";
import Profile from "./page/Profile/Profile";
import PostPage from "./page/SinglePost/PostPage";

function App() {
  const { pathname } = useLocation();
  const { userID } = useGetUserID();

  useEffect(() => {
    if (userID) return;
    localStorage.setItem("userID", "@euai");
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={3} className="border-nav-left">
          <SideBar />
        </Col>
        <Col lg={6} className={pathname === "/explore" && "p-0"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/:userID" element={<Profile />} />
            <Route path="/status/:postID" element={<PostPage />} />
          </Routes>
        </Col>
        <Col lg={3} className="border-nav-right">
          <Trends />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
