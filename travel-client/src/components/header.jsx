export default function Header() {
  return (
    <header className="flex text-center p-10 bg-gray-300">
      <div className="w-1/3"></div>
      <h1 className="bg-red-300 w-1/3 text-2xl font-bold">Travel API</h1>
      <div className="w-1/3">
        <button
          className="bg-blue-300 rounded-lg p-1 font-bold"
          onClick={() =>
            (window.location.href = "http://localhost:3030/oauth/google")
          }
        >
          Admin
        </button>
      </div>
    </header>
  );
}
