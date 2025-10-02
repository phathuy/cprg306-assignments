import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-green-300 mb-6">Add New Item</h1>
      <NewItem />
    </main>
  );
}
