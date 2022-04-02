import "./App.css";
import Drinks from "./Components/Drinks";
import FoodItems from "./Components/FoodItems";

import MainCourse from "./Components/MainCourse";

function App() {
  return (
    <div className="App">
      <FoodItems />
      <h2>Main Course</h2>
      <MainCourse />
      <MainCourse />
      <h2>Drinks</h2>
      <Drinks />
    </div>
  );
}

export default App;
