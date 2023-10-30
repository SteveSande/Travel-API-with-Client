import { useEffect } from "react";
import { app } from "./client";
import Header from "./components/header";

export default function App() {
  useEffect(() => {
    app.authenticate();
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

  return (
    <div className="flex flex-col">
      <Header />
    </div>
  );
}
