import React, { useEffect, useState } from "react";

// const Fetch = (props) => {
//   const [{props.DataName}, setData] = useState([]);
//   const [b, setLoading] = useState(true);
//   const queryWeather = () => {
//     fetch("https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json")
//       .then((response) => response.json())
//       .then((weather) => {
//         setData(weather[0].timeSeries[0].areas[0]);
//         setLoading(false);
//       });
//   };
//   useEffect(() => {
//     queryWeather();
//   }, []);
// };

// function Feach(a) {
//   const [a, setData] = useState([]);
//   const [b, setLoading] = useState(true);
//   const queryWeather = () => {
//     fetch("https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json")
//       .then((response) => response.json())
//       .then((weather) => {
//         setData(weather[0].timeSeries[0].areas[0]);
//         setLoading(false);
//       });
//   };
//   useEffect(() => {
//     queryWeather();
//   }, []);
// }
// export default Fetch;
