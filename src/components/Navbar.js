export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="bg-blue-600 dark:bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Smart AI</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded text-black dark:text-white hover:scale-105 transition-transform"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
