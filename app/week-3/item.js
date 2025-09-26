export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-gray-800 border border-green-300 rounded-lg p-4 mb-4 shadow-md w-100">
      <p className="text-green-300 text-base font-semibold">{name}</p>
      <p className="text-gray-200">Quantity: {quantity}</p>
      <p className="text-gray-400">Category: {category}</p>
    </li>
  );
}
