import { useEffect } from "react";
import { app } from "./client";
import Header from "./components/header";
import Content from "./components/content";
import Query from "./components/query";
import Response from "./components/response";

export default function App() {
  useEffect(() => {
    app.authenticate();

    // let pictures;
    // async function getPics() {
    //   await app.service("pictures").create({
    //     picture: "'test'",
    //     destination: "'test'",
    //     region: "'test'",
    //     country: "'test'",
    //     subdivision: "'test'",
    //     tags: ["'test'", "'test'"],
    //   });
    //   pictures = await app.service("pictures").find();
    //   console.log(pictures);
    // }

    // getPics();
  }, []);

  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-col items-center">
        <Query />
        <Response />
      </main>
    </div>
  );
}
