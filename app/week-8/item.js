export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      className="bg-gray-800 border border-green-300 rounded-lg p-4 mb-4 w-100 hover:bg-gray-600 shadow-md transition cursor-pointer"
      onClick={() => onSelect(name)}
    >
      <p className="text-green-300 text-base font-semibold">{name}</p>
      <p className="text-gray-200">Quantity: {quantity}</p>
      <p className="text-gray-400">Category: {category}</p>
    </div>
  );
}
