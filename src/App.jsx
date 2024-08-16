import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [medals, setMedals] = useState([]);

  const [country, setCountry] = useState("");
  const [gold, setGold] = useState("0");
  const [silver, setSilver] = useState("0");
  const [bronze, setBronze] = useState("0");

  //인풋핸들러
  console.log("country : ", country, "gold : ", gold, "silver : ", silver, "bronze : ", bronze);

  const inputCountryHandler = (e) => {
    setCountry(e.target.value);
  };
  const inputGoldHandler = (e) => {
    setGold(e.target.value);
  };

  const inputSilveryHandler = (e) => {
    setSilver(e.target.value);
  };

  const inputBronzeHandler = (e) => {
    setBronze(e.target.value);
  };

  // 인풋 초기화
  const inputReset = () => {
    setCountry("");
    setGold("0");
    setSilver("0");
    setBronze("0");
  };

  //추가 버튼
  const addMedalHandler = (e) => {
    e.preventDefault();

    const newMedal = {
      id: new Date().getTime(),
      country: country,
      gold: gold,
      silver: silver,
      bronze: bronze,
    };
    if (!country) {
      alert("국가명을 입력해주세요.");
      return;
    }
    if (medals.some((medal) => medal.country === newMedal.country)) {
      alert("이미 추가된 국가명입니다. 업데이트를 사용해주세요.");
      return;
    }
    setMedals([...medals, newMedal]);
    console.log(medals);
    inputReset();
    alert("국가추가 완료");
  };

  //업데이트 버튼
  const updateMedalHandler = (e) => {
    e.preventDefault();

    if (!country) {
      alert("국가명을 입력해주세요.");
      return;
    }
    setMedals(
      medals.map((medal) => {
        if (medal.country === country) {
          return {
            ...medal,
            gold: gold,
            silver: silver,
            bronze: bronze,
          };
        } else {
          return medal;
        }
      })
    );
    alert("업데이트 완료");
  };

  //삭제버튼
  const deletMedalHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>2024 파리 올림픽</h1>
      <div>
        <label>국가명</label>
        <input onChange={inputCountryHandler} value={country}></input>
        <label>금메달</label>
        <input onChange={inputGoldHandler} value={gold}></input>
        <label>은메달</label>
        <input onChange={inputSilveryHandler} value={silver}></input>
        <label>동메달</label>
        <input onChange={inputBronzeHandler} value={bronze}></input>
        <button onClick={addMedalHandler}>추가</button>
        <button onClick={updateMedalHandler}>업데이트</button>
      </div>
      <div>
        메달 리스트
        {medals.length === 0 ? (
          <p>아직 추가된 국가가 없습니다.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>국가명</th>
                <th>금메달</th>
                <th>은메달</th>
                <th>동메달</th>
                <th>액션</th>
              </tr>
            </thead>
            <tbody>
              {medals.map((medal) => {
                return (
                  <tr>
                    <td>{medal.country}</td>
                    <td>{medal.gold}</td>
                    <td>{medal.silver}</td>
                    <td>{medal.bronze}</td>
                    <td>
                      <button>삭제</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default App;
