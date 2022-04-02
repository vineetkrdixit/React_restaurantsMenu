import "./App.css";
import Drinks from "./Components/Drinks";
import FoodItems from "./Components/FoodItems";
import MainCourse from "./Components/MainCourse";
import Total from "./Components/Total";

function App() {
  const mainCouseData = [
    {
      rType: "Veg",
      rDish: "Dal Makhni",
      rPrice: "200",
    },
    {
      rType: "NonVeg",
      rDish: "Chicken Korma",
      rPrice: "380",
    },
    {
      rType: "NonVeg",
      rDish: "Mutton Biryani",
      rPrice: "300",
    },
    {
      rType: "Veg",
      rDish: "Palak Paneer",
      rPrice: "250",
    },
    {
      rType: "Veg",
      rDish: "Kadhai Paneer",
      rPrice: "250",
    },
  ];
  const DrinksData = [
    {
      rType: "Mocktail",
      rDish: "Mango Mule",
      rPrice: "120",
    },
    {
      rType: "Cocktail",
      rDish: "Californication",
      rPrice: "180",
    },
    {
      rType: "Cocktail",
      rDish: "Mojito",
      rPrice: "130",
    },
    {
      rType: "Mocktail",
      rDish: "Shirley Ginger",
      rPrice: "140",
    },
    {
      rType: "Cocktail",
      rDish: "Margarita",
      rPrice: "120",
    },
  ];
  return (
    <div className="App">
      <FoodItems />
      <h2>Main Course</h2>
      {mainCouseData.map((item) => {
        // console.log(items);
        return (
          <MainCourse
            rType={item.rType}
            rDish={item.rDish}
            rPrice={item.rPrice}
          />
        );
      })}
      <h2>Drinks</h2>
      {DrinksData.map((items) => {
        // console.log(items);
        return (
          <Drinks
            rType={items.rType}
            rDish={items.rDish}
            rPrice={items.rPrice}
          />
        );
      })}
      <Total />
    </div>
  );
}

export default App;
