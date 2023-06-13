import React, { useCallback, useEffect, useMemo } from "react";
import "./startPage.css";
import { Link } from "react-router-dom";
import ImageArticle from "./imageArticle";

function StartPage({ setStartPropsPage, setEndPropsPage }) {
  const listPoint4Game = useMemo(() => {
    return [
      "Покидая Неверленд",
      "Джентльмен из Кокоди",
      "Французы",
      "Hot for Teacher",
      "Сумо",
      "Моисей",
      "Хёпфинген",
      "Джонсон, Дуэйн",
      "Фрейзер, Брендан",
      "Ласты (дайвинг)",
      "Киев",
    ];
  }, []);

  const randomPointsIndex = generateRandomNumbers(listPoint4Game.length - 1);
  function generateRandomNumbers(b) {
    const randomNumbers = [];

    while (randomNumbers.length < 2) {
      const randomNumber = Math.floor(Math.random() * (b + 1));

      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
    console.log(randomNumbers);
    return randomNumbers;
  }

  const startPointName = useMemo(() => {
    return listPoint4Game[randomPointsIndex[0]];
  }, [listPoint4Game, randomPointsIndex]);
  const endPointName = useMemo(() => {
    return listPoint4Game[randomPointsIndex[1]];
  }, [listPoint4Game, randomPointsIndex]);

  useEffect(() => {
    setStartPropsPage(startPointName);
    setEndPropsPage(endPointName);
  }, [endPointName, setEndPropsPage, setStartPropsPage, startPointName]);

  const params = { startPointName, endPointName };
  return (
    <>
      <div className="disclaimer">
        <div className="disclaimerText">{listPoint4Game}</div>
      </div>

      <div className="startGameBox">
        <div className="dataPoint">
          <ImageArticle pageTitle={startPointName} />
          <div className="textPoint">
            <div className="point">Начальная статья</div>
            <div className="pointName">{startPointName}</div>
          </div>
        </div>

        <div className="dataPoint">
          <ImageArticle pageTitle={endPointName} />
          <div className="textPoint">
            <div className="point">Конечная статья</div>
            <div className="pointName">{endPointName}</div>
          </div>
        </div>

        <Link
          className="nav-link active"
          to={{
            pathname: "/Game",
            state: params,
          }}
        >
          <button>StartGame</button>
        </Link>
      </div>
    </>
  );
}

export default StartPage;
