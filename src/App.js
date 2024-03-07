import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import PolarChart from './components/PolarChart';
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          '#161925', 
          '#23395B', 
          '#406E8E', 
          '#8EA8C3', 
          '#CBF7ED'
        ],
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData}/>
      </div>
      <div style={{ width: 500}}>
        <PieChart chartData={userData}/>
      </div>
      <div style={{ width: 500}}>
        <PolarChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;