import React from "react";
import "../styles/latestArticles.css";
import article1 from "../images/articles/howto.webp";
import article2 from "../images/articles/costto.webp";
import article3 from "../images/articles/whatdoes.webp";

const articles = [
  {
    title: "How to Remove Kitchen Countertop in 7 Steps",
    excerpt:
      "Removing a kitchen countertop can be a manageable task when approached with...",
    image: article1,
    link: "#",
  },
  {
    title: "The Cost to Replace Kitchen Cabinets and Countertops",
    excerpt:
      "Replacing kitchen cabinets and countertops is a significant investment, but...",
    image: article2,
    link: "#",
  },
  {
    title: "What Does Refreshed Bathroom Mean?",
    excerpt:
      "A refreshed bathroom refers to a space that has been updated or revitalized to...",
    image: article3,
    link: "#",
  },
];

const LatestArticles = () => {
  return (
    <div className="latest-articles-wrapper">
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-content">
              <h3 className="article-title">{article.title}</h3>
              <p className="article-excerpt">{article.excerpt}</p>
              <a href={article.link} className="read-link">
                Read Article
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestArticles;
