import { navSelectionAtom } from "../atoms";
import { useAtom } from "jotai";
import FieldListButton from "./fieldListButton";

export default function QueryCustomizer() {
  const [navSelection, setNavSelection] = useAtom(navSelectionAtom);
  const fields = [
    "Destination",
    "Region",
    "Country",
    "Subdivision",
    "City",
    "Tags",
  ];

  switch (navSelection) {
    case "random":
      return <div>random</div>;
    case "curated":
      return <div>curated</div>;
    case "lists":
      return (
        <div>
          {fields.map((field) => (
            <FieldListButton text={field} />
          ))}
        </div>
      );
    default:
      return null;
  }
}
