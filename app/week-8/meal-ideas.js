"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [foundMeals, setFoundMeals] = useState(false);
  const [loading, setLoading] = useState(false);

  async function loadMealIdeas() {
    if (!ingredient) return;
    setLoading(true);
    const mealList = await fetchMealIdeas(ingredient);
    setMeals(mealList);
    setFoundMeals(mealList.length > 0);
    setLoading(false);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg w-[32rem]">
      {/* First render, no ingredient selected */}
      {!ingredient && (
        <p className="text-xl text-white mb-6 text-center">
          Meal ideas (select an item).
        </p>
      )}
      {!ingredient && (
        <p className="text-gray-400 text-center mb-6">
          Choose an item to see ideas.
        </p>
      )}

      {/* Ingredient selected */}
      {ingredient && (
        <h2 className="text-xl text-white mb-6 text-center">
          Meal ideas for &quot;{ingredient}&quot;
        </h2>
      )}

      {/* Loading... */}
      {loading && <p className="text-gray-400 text-center">Loading...</p>}

      {/* No meals found for selected ingredient */}
      {ingredient && !loading && !foundMeals && (
        <p className="text-gray-400 text-center">No meal ideas found.</p>
      )}

      {/* Meal list */}
      {!loading && (
        <ul className="grid grid-cols-2 gap-4">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="bg-gray-700 rounded-lg p-4 text-white"
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
