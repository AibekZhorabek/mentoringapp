import React, {Component} from 'react';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Content from './Content/Content';
import Messages from "./Messages/Messages";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import Notifications from "./Notifications/Notifications";
import Bookmarks from "./Bookmarks/Bookmarks";
import Meetings from "./Meetings/Meetings";
import Explore from "./Explore/Explore";
import PopularArticles from "./PopularArticles/PopularArticles";

const App = () => {
  return (
      <BrowserRouter>
          <div className="appWrapper">
              <Header/>
              <NavBar />
              <Routes>
                  <Route path="/" element={<Content />}/>
                  <Route path="/messages" element={<Messages/>}/>
                  <Route path="/explore" element={<Explore/>} />
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/notifications" element={<Notifications/>}/>
                  <Route path="/bookmarks" element={<Bookmarks/>}/>
                  <Route path="/meetings" element={<Meetings/>}/>
              </Routes>
              <PopularArticles />
          </div>
      </BrowserRouter>
  )
}

export default App;
