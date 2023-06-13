/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import queryString from "query-string";

import "./gamePage.css";
import WikipediaPage from "./WikipediaPage";

function GamePage({ startPropsPage, endPropsPage }) {
  console.log(startPropsPage, endPropsPage, "  paPAPAPAPAPAPAP");
  // const location = useLocation();
  // const params = queryString.parse(location.search);

  // console.log("padada  ", params);

  const [pointsList, setPointsList] = useState([startPropsPage]);
  console.log("sdsfsdsf", pointsList[pointsList.length - 1]);

  useEffect(() => {
    if (endPropsPage === pointsList[pointsList.length - 1]) {
      alert("Поздравляю ");
    }
  }, [endPropsPage, pointsList]);

  return (
    <>
      <div className="routeBlock">
        <div className="routeBlockText">
          {pointsList[pointsList.length - 1]}
        </div>
      </div>
      <div className="reminderAndWikiWindow">
        <div className="reminderPointBox">
          <>
            {" "}
            {pointsList.map((item) => (
              <div>{item}</div>
            ))}
          </>

          <div className="endPoint">{endPropsPage}</div>
          <div></div>
        </div>
        <div className="WikiWindow">
          {
            <WikipediaPage
              startPage={startPropsPage}
              setPointsList={setPointsList}
            />
          }
        </div>
      </div>
    </>
  );
}

export default GamePage;
