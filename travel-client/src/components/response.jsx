import { useEffect, useState } from "react";
import { resAtom } from "../atoms";
import { useAtom } from "jotai";

export default function Response() {
  const [res, setRes] = useAtom(resAtom);

  return (
    <div className=" bg-pink-200 border-2 border-black rounded m-5 p-1 overflow-auto w-[1000px] h-[600px]">
      <pre>{JSON.stringify(res, null, 2)}</pre>
    </div>
  );
}
