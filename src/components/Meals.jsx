import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { backendURL } from "../util";
import MealItem from "./MealItem";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios
      .get(`${backendURL}/meals`)
      .then((res) => setMeals(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
