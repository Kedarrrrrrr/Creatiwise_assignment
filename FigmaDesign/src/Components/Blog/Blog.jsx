import React from "react";
import "./Blog.css";
import img1 from "../../assets/Blog1.png";
import img2 from "../../assets/Blog2.png";
import img3 from "../../assets/Blog3.png";

const Blog = () => {
  const blogPosts = [
    {
      date: "Nov 9, 2023",
      title: "How UX works in web",
      image: img1,
      tags: ["UI", "UX"],
    },
    {
      date: "Aug 18, 2023",
      title: "Case study - Analysis Application.",
      image: img2,
      tags: ["DESIGN", "PRINT"],
    },
    {
      date: "Feb 16, 2023",
      title: "3 ways to develop your skill",
      image: img3,
      tags: ["FIGMA", "WEB"],
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>✶ Blog</h2>
        <a href="#" className="view-all">view all</a>
      </div>

      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div className="blog-item" key={index}>
            <img src={post.image} alt={post.title} className="blog-image" />

            <div className="blog-content">
              <p className="blog-date">{post.date}</p>
              <h3 className="blog-title">{post.title}</h3>

              <div className="blog-tags">
                {post.tags.map((tag, idx) => (
                  <span className="tag" key={idx}>{tag}</span>
                ))}
              </div>
            </div>

            <button className="read-button">Read</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
