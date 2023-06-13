import React, { useEffect, useState } from "react";
import "./startPage.css";

const ImageArticle = ({ pageTitle }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchArticleImage = async (pageTitle) => {
      try {
        const response = await fetch(
          `https://ru.wikipedia.org/w/api.php?action=query&titles=${pageTitle}&prop=pageimages&piprop=original&format=json&origin=*`
        );
        const data = await response.json();
        const pages = data.query.pages;
        const pageId = Object.keys(pages)[0];
        const page = pages[pageId];
        const imageUrl = page.original?.source || null;
        setImageUrl(imageUrl);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchArticleImage(pageTitle);
  }, [pageTitle]);

  return (
    <div>
      {imageUrl ? (
        <img className="logoPoint" src={imageUrl} alt="Article Image" />
      ) : (
        <img
          className="logoPoint"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/2244px-Wikipedia-logo-v2.svg.png"
          alt="Wiki Logo"
        />
      )}
    </div>
  );
};

export default ImageArticle;
