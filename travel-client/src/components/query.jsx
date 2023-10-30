import { queryAtom } from "../atoms";
import { useAtom } from "jotai";

export default function Query() {
  const [query, setQuery] = useAtom(queryAtom);

  return (
    <div className="flex justify-between w-96 bg-purple-200 border-2 border-black rounded m-5">
      <span className="w-10/12 break-words p-1">{query}</span>
      <button className="bg-green-500 p-1 w-2/12 rounded-r">GET</button>
    </div>
  );
}
