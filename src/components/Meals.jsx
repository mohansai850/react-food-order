import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/meals")
      .then((res) => setMeals(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}
