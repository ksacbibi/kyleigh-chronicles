import React, { useState, useEffect } from 'react';

// Define your content blocks
const components = {
  header: ({ level, text }) => React.createElement(`h${level}`, {}, text),
  paragraph: ({ text }) => <p>{text}</p>,
  image: ({ src, alt }) => <img src={src} alt={alt} />,
  // Add more components as needed
};

const BlogPost = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/posts/${postId}`)
      .then(response => response.json())
      .then(setPost);
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      {post.content.map((block, index) => {
        const Component = components[block.type];
        return <Component key={index} {...block.props} />;
      })}
    </div>
  );
};

export default BlogPost;
