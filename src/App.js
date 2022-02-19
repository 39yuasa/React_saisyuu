import "./App.css";
import React, { useEffect, useState } from "react";
import PTag from "./compornent/ptag";
import Heading from "./compornent/heading";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const queryWeather = () => {
    fetch("https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json")
      .then((response) => response.json())
      .then((weather) => {
        setData(weather[0].timeSeries[0].areas[0]);
        setLoading(false);
      });
  };
  useEffect(() => {
    queryWeather();
  }, []);

  let weatherInfo;
  if (loading) {
    weatherInfo = <p>loading</p>;
  } else {
    weatherInfo = (
      <>
        <PTag
          name={data.area.name}
          days={"明日の天気"}
          weather={data.weathers[0]}
        />
        <PTag
          name={data.area.name}
          days={"明後日の天気"}
          weather={data.weathers[1]}
        />
        <PTag
          name={data.area.name}
          days={"明々後日の天気"}
          weather={data.weathers[2]}
        />
      </>
    );
  }
  return (
    <>
      <Heading pageName={"天気"} weather={weatherInfo} />
    </>
  );
}
export default App;
