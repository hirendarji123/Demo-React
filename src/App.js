import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPostList from "./Components/BlogPostList.jsx";
import BlogPostDetails from "./Components/BlogPostDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogPostList />} />
        <Route path="/post/:title" element={<BlogPostDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
