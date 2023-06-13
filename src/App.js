import "./App.css";
import StartPage from "./start_page/startPage";
import { Routes, Route } from "react-router-dom";
import GamePage from "./game_page/gamePage";
import { useState } from "react";

function App() {
  const [startPropsPage, setStartPropsPage] = useState("");
  const [endPropsPage, setEndPropsPage] = useState("");
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <StartPage
              setStartPropsPage={() => setStartPropsPage}
              setEndPropsPage={() => setEndPropsPage}
            />
          }
        />
        <Route
          path="/game"
          element={
            <GamePage
              startPropsPage={() => startPropsPage}
              endPropsPage={() => endPropsPage}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
