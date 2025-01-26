import { useContext } from "react";
import { backendURL, currencyFormatter } from "../util";
import Button from "./Button";
import { CartContext } from "../store/CartContext";

export default function MealItem({ meal }) {
  const { addMeal } = useContext(CartContext);
  // console.log(ctx);
  return (
    <li className="meal-item">
      <article>
        <img src={`${backendURL}/${meal.image}`} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button
            onClick={() => {
              addMeal(meal);
            }}
          >
            Add to Cart
          </Button>
        </p>
      </article>
    </li>
  );
}
