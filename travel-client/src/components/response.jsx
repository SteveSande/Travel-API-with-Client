import { useEffect, useState } from "react";
import { urlAtom } from "../atoms";
import { useAtom } from "jotai";

export default function Response() {
  const [response, setResponse] = useState("Error");

  // useEffect(() => {
  //   async function getPics() {
  //     let res = await queries[query];
  //     setResponse(res);
  //   }

  //   getPics();
  // }, []);

  return (
    <div className=" bg-pink-200 border-2 border-black rounded m-5 p-1 overflow-auto w-[1000px] h-[600px]">
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}
