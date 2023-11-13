import { urlAtom } from "../atoms";
import { useAtom } from "jotai";

export default function Query() {
  const [url, setUrl] = useAtom(urlAtom);

  async function get() {
    console.log("click");

    try {
      let res = await fetch(url.toString());
      let resJSON = await res.json();
      console.log(resJSON.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="flex justify-between w-96 bg-purple-200 border-2 border-black rounded m-5">
      <span className="w-10/12 break-words p-1">{url.toString()}</span>
      <button className="bg-green-500 p-1 w-2/12 rounded-r" onClick={get}>
        GET
      </button>
    </div>
  );
}
