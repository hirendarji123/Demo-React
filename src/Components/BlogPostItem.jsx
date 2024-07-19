import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
const BlogPostItem = ({ post }) => {
  const navigate = useNavigate();

  return (
    <Card className="mb-4 h-100">
      {post.urlToImage && (
        <Card.Img variant="top" src={post.urlToImage} alt={post.title} />
      )}
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>{post.description}</Card.Text>
        <Card.Text>
          <small className="text-muted" style={{ float: "right" }}>
            ~{new Date(post.publishedAt).toLocaleDateString()}
          </small>
        </Card.Text>
        <br />
      </Card.Body>
      <Card.Footer>
        <Button
          style={{ marginTop: 10, marginLeft: 30 }}
          onClick={(e) => {
            navigate(`/post/${encodeURIComponent(post.title)}`);
          }}
        >
          More Details
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default BlogPostItem;
