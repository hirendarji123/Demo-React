import React, { useState, useEffect } from "react";
import BlogPostItem from "./BlogPostItem";
import { Container, Row, Col, Button } from "react-bootstrap";
import { fetchPosts } from "../Services/apiService";

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const loadPosts = async () => {
        const data = await fetchPosts(page);
        setPosts(data?.articles);
        setLoading(false);
      };

      loadPosts();
    } catch (err) {
      setLoading(false);
    }
  }, [page]);

  return (
    <>
      <Container>
        <h1 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
          Blog Posts
        </h1>
        <hr />
        {loading ? (
          <div style={{ fontSize: 32, textAlign: "center" }}>Loading...</div>
        ) : (
          <>
            <Row>
              {posts && posts.length > 0 ? (
                posts.map((post, index) => (
                  <Col
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={index}
                    className="d-flex"
                  >
                    <BlogPostItem post={post} />
                  </Col>
                ))
              ) : (
                <h1 style={{ textAlign: "center" }}>No Data Found</h1>
              )}
            </Row>
            <div className="d-flex justify-content-between my-4">
              <Button
                onClick={() => setPage((page) => page - 1)}
                disabled={page === 1}
              >
                Previous
              </Button>
              <Button onClick={() => setPage((page) => page + 1)}>Next</Button>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default BlogPostList;
