import { useState } from "react";
import axios from "axios";

import Card from "./components/Card";
import "./App.css";
import InputBox from "./components/InputBox";

function App() {
  const [value, setValue] = useState("");

  const [data, setData] = useState([]);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const search = async (query) => {
    const {
      data: { meals },
    } = await axios.get(`${process.env.REACT_APP_BASE_URL}${query}`);
    setData(meals);
  };

  return (
    <div className="App">
      <div className="top">
        <h2>Recipie App</h2>
        <InputBox value={value} handleValue={handleValue} search={search} />
      </div>
      <div className="cards">
        {data?.map((el) => {
          return <Card data={el} key={el.idMeal} />;
        })}
      </div>
    </div>
  );
}

export default App;
