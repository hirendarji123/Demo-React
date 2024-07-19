// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { fetchPostDetails } from "../Services/apiService";

// const BlogPostDetails = () => {
//   const { title } = useParams();
//   const navigate = useNavigate();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     const loadPostDetails = async () => {
//       const data = await fetchPostDetails(title);
//       setPost(data);
//     };

//     loadPostDetails();
//   }, [title]);

//   if (!post) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <button onClick={() => navigate(-1)}>Back</button>
//       <h1>{post.title}</h1>
//       {post.urlToImage && <img src={post.urlToImage} alt={post.title} />}
//       <p>{post.content}</p>
//     </div>
//   );
// };

// export default BlogPostDetails;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPostDetails } from "../Services/apiService";
import { Container, Card, Button } from "react-bootstrap";

const BlogPostDetails = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPostDetails = async () => {
      const data = await fetchPostDetails(title);
      setPost(data);
    };

    loadPostDetails();
  }, [title]);

  if (!post) {
    return <div style={{ fontSize: 32, textAlign: "center" }}>Loading...</div>;
  }

  return (
    <Container>
      <Button variant="secondary" onClick={() => navigate(-1)} className="my-4">
        Back
      </Button>
      <Card>
        {post.urlToImage && (
          <Card.Img
            height={500}
            width={500}
            variant="top"
            src={post.urlToImage}
            alt={post.title}
          />
        )}
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BlogPostDetails;
