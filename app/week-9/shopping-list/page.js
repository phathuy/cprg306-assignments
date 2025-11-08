"use client";
import { useState } from "react";
import { useUserAuth } from "../../contexts/AuthContext";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  if (!user) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center text-white bg-gray-900">
        <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
        <p className="text-lg text-gray-300">
          Please log in to view your shopping list.
        </p>
        <Link href="/week-9" className="mt-4 text-blue-500 underline">
          Go to Sign In Page
        </Link>
      </main>
    );
  }

  function handleItemSelect(itemName) {
    let cleanName = itemName.split(",")[0];

    cleanName = cleanName.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF]|\uFE0F)/g,
      ""
    );

    cleanName = cleanName.trim();

    setSelectedItemName(cleanName);
  }

  function handleAddItem(item) {
    setItems((currentItems) => [...currentItems, item]);
  }

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center p-6 text-white">
      <h1 className="text-3xl font-bold text-green-300 mb-6">Shopping List</h1>
      <button
        onClick={handleSignOut}
        className="bg-red-500 text-white px-4 py-2 rounded mb-4"
      >
        Log Out
      </button>

      <div className="flex w-full justify-center gap-4">
        <div className="flex flex-col items-center">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="flex flex-col items-center">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
