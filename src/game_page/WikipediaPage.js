import React, { useEffect, useState } from "react";

const WikipediaPage = ({ startPage, setPointsList }) => {
  const [pageContent, setPageContent] = useState("");
  const [currentPageName, setCurrentPageName] = useState(startPage);

  document.onclick = (event) => {
    event.preventDefault();
    if (event.target.title) {
      console.log("if title", event.target);
      setCurrentPageName(event.target.title);
      setPointsList((previousState) => [...previousState, event.target.title]);
    } else {
      console.log("else text", event.target);
      setCurrentPageName(event.target.textContent);
      setPointsList((previousState) => [...previousState, event.target.text]);
    }
  };

  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        const response = await fetch(
          `http://ru.wikipedia.org/w/api.php?action=parse&prop=text|headhtml&page=${currentPageName}&format=json&origin=*`
        );
        const html = await response.json();
        window.scrollTo(0, 0);
        setPageContent(html.parse.text["*"]);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchPageContent();
  }, [currentPageName]);

  return <div dangerouslySetInnerHTML={{ __html: pageContent }}></div>;
};

export default WikipediaPage;
