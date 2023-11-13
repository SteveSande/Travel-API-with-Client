import { urlAtom } from "../atoms";
import { useAtom } from "jotai";

export default function FieldListButton(props) {
  const [url, setUrl] = useAtom(urlAtom);

  function changeList(field) {
    setUrl(new URL(`http://localhost:3030/pictures?$select[]=${field}`));
  }

  return (
    <>
      <button onClick={() => changeList(props.text.toLowerCase())}>
        {props.text}
      </button>
      <br />
    </>
  );
}
