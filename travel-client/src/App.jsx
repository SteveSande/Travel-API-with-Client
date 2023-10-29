import { useEffect } from "react";
import { app } from "./client";

export default function App() {
  useEffect(() => {
    let pictures;
    async function getPics() {
      await app.service("pictures").create({
        picture: "'test'",
        destination: "'test'",
        region: "'test'",
        country: "'test'",
        subdivision: "'test'",
        tags: ["'test'", "'test'"],
      });
      pictures = await app.service("pictures").find();
      console.log(pictures);
    }

    getPics();
  }, []);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
