import NavItem from "./nav-item";
import { navSelectionAtom } from "../atoms";
import { useAtom } from "jotai";

export default function Header() {
  const [navSelection, setNavSelection] = useAtom(navSelectionAtom);

  function onNavClick(text) {
    setNavSelection(text);
  }

  return (
    <header className="bg-gray-200 mb-5">
      <div className="flex text-center p-10 bg-gray-400">
        <div className="w-1/3"></div>
        <h1 className="bg-red-300 w-1/3 text-2xl font-bold">Travel API</h1>
        <div className="w-1/3">
          <button
            className="bg-blue-300 rounded p-1 font-bold border-2 border-black"
            onClick={() =>
              (window.location.href = "http://localhost:3030/oauth/google")
            }
          >
            Admin
          </button>
        </div>
      </div>
      <ul className="flex justify-center">
        <NavItem
          text="Random Pictures"
          clickHandler={() => onNavClick("random")}
        />
        <NavItem
          text="Curated Pictures"
          clickHandler={() => onNavClick("curated")}
        />
        <NavItem text="Field Lists" clickHandler={() => onNavClick("lists")} />
      </ul>
    </header>
  );
}
