import { useEffect, useState } from "react";
import { app } from "../client";

export default function Response() {
  const [response, setResponse] = useState("Error");

  useEffect(() => {
    let pictures;
    async function getPics() {
      pictures = await app.service("pictures").find();
      setResponse(pictures);
    }

    getPics();
  }, []);

  return (
    <div className="w-96 bg-pink-200 border-2 border-black rounded m-5 p-1">
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}
