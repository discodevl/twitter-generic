import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes, useLocation } from 'react-router-dom';
import Feed from "./components/Feed/Feed";
import SideBar from "./components/SideBar/SideBar";
import Trends from "./components/Trends/Trends";
import Explore from "./components/Explore/Explore";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Profile from "./components/Profile/Profile";
import { useEffect } from "react";
import useGetUserID from "./hooks/useGetUserID";
import PostPage from "./page/SinglePost/PostPage";

function App() {
  const {pathname} = useLocation();
  const {userID} = useGetUserID();

  useEffect(() => {
    if(userID) return;
    localStorage.setItem("userID", "@oTalDoReceba")
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={3} className="border-nav-left">
          <SideBar />
        </Col>
        <Col lg={6} className={pathname === "/explore" && 'p-0'}>
          <Routes>
            <Route path="/" element={<Feed />}/>
            <Route path="/explore" element={<Explore />}/>
            <Route path="/bookmarks" element={<Bookmarks />}/>
            <Route path="/:user" element={<Profile />}/>
            <Route path="/status/:postID" element={<PostPage />}/>
          </Routes>
          
        </Col>
        <Col lg={3} className="border-nav-right">
          <Trends />
        </Col>
      </Row>
    </Container>
  )
}

export default App
