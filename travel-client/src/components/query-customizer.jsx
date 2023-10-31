import { navSelectionAtom } from "../atoms";
import { useAtom } from "jotai";

export default function QueryCustomizer() {
  const [navSelection, setNavSelection] = useAtom(navSelectionAtom);

  switch (navSelection) {
    case "random":
      return <div>random</div>;
    case "curated":
      return <div>curated</div>;
    case "lists":
      return <div>lists</div>;
    default:
      return null;
  }
}
