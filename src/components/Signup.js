export default function Signup() {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded-lg shadow bg-white dark:bg-gray-800 text-black dark:text-white">
      <h2 className="text-xl font-bold mb-4">Signup</h2>
      <input type="text" placeholder="Name" className="w-full p-2 mb-3 border rounded dark:bg-gray-700 dark:text-white" />
      <input type="text" placeholder="Email" className="w-full p-2 mb-3 border rounded dark:bg-gray-700 dark:text-white" />
      <input type="password" placeholder="Password" className="w-full p-2 mb-3 border rounded dark:bg-gray-700 dark:text-white" />
      <button className="bg-green-600 text-white w-full py-2 rounded">Signup</button>
    </div>
  );
}
